import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAtom } from 'jotai';

import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body1, Body2, Body4 } from '@/components/common/Typography';
import { Delete } from '@/components/features/DeleteModal';
import { markersAtom } from '@/contexts/MarkerAtom';
import { useDeleteMarkers } from '@/hooks/api/marker/useDeleteMarkers';
import { useMarkerList } from '@/hooks/api/marker/useMarkerList';
import { useAuth } from '@/hooks/auth/useAuth';
import { Category } from '@/types/naver';

type Props = { bookmarkId: number; onPrev: () => void };
export const BookmarkDetail = ({ bookmarkId, onPrev }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [, setMarkers] = useAtom(markersAtom);
  const observerTarget = useRef<HTMLDivElement>(null);

  const { token } = useAuth();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useMarkerList(bookmarkId, token);
  const deleteMarkersMutation = useDeleteMarkers();

  const handleToggleSelect = (markerId: number) => {
    setSelectedId((prev) => (prev === markerId ? 0 : markerId));
  };

  const handleDelete = () => {
    deleteMarkersMutation.mutate({ token, markerId: selectedId });
    setIsOpen(false);
    setSelectedId(0);
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
    setSelectedId(0);
  };

  const allMarkers = useMemo(
    () => (data?.pages ? data.pages.flatMap((page) => page.markers.data) : []),
    [data?.pages]
  );

  useEffect(() => {
    if (allMarkers.length) {
      setMarkers((prevMarkers) => {
        const newMarkersStr = JSON.stringify(allMarkers);
        const prevMarkersStr = JSON.stringify(prevMarkers);
        return newMarkersStr !== prevMarkersStr ? allMarkers : prevMarkers;
      });
    }
  }, [allMarkers, setMarkers]);

  const selectedMarkerName = useMemo(
    () => allMarkers.find((item) => item.markerId === selectedId)?.title || '마커',
    [allMarkers, selectedId]
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div>
      <div className="flex flex-row items-center">
        <Icon
          name="back"
          size={30}
          onClick={() => {
            setMarkers([]);
            onPrev();
          }}
          className="cursor-pointer"
        />
        <Body1 className="my-4 mx-3" weight="semibold" onClick={onPrev}>
          <span className="text-primary mr-2">{data?.pages[0]?.bookmarkName}</span>
          리스트
        </Body1>
      </div>
      <ListCard>
        {allMarkers.map((item, index) => (
          <div key={item.markerId}>
            <div
              className={`flex flex-row justify-between gap-4 items-center ${index !== allMarkers.length - 1 && 'pb-2'} `}
            >
              <div className="flex flex-col gap-1 py-2">
                <div className="flex flex-row gap-3 items-center">
                  <Body2 className="text-primary">{item.title}</Body2>
                  {item.category && (
                    <Chip variant="medium">
                      {typeof item.category === 'object'
                        ? (item.category as Category).majorCategory
                        : item.category}
                    </Chip>
                  )}
                </div>
                <Body4 className="pt-1 " weight="normal">
                  {item.address}
                </Body4>
              </div>
              {isEditing && (
                <Icon
                  name="check"
                  className="cursor-pointer h-7 w-7 flex-shrink-0"
                  color={selectedId === item.markerId ? 'primary' : 'gray'}
                  onClick={() => handleToggleSelect(item.markerId)}
                />
              )}
            </div>
            {index < allMarkers.length - 1 && <hr className="border-dashed pt-2" />}
          </div>
        ))}
        <div ref={observerTarget} />
      </ListCard>
      <div className="flex gap-4 mt-5">
        {isEditing ? (
          <>
            <Button variant="gray" size="large" onClick={handleCancelEditing}>
              돌아가기
            </Button>
            <Button
              variant="primary"
              size="large"
              disabled={selectedId === 0}
              onClick={() => setIsOpen(true)}
            >
              삭제하기
            </Button>
          </>
        ) : (
          <Button variant="primary" size="large" onClick={() => setIsEditing(true)}>
            수정하기
          </Button>
        )}
      </div>
      <Delete
        item={selectedMarkerName}
        onClickDelete={handleDelete}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};
