import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body1, Body2, Body4 } from '@/components/common/Typography';
import { markersAtom } from '@/contexts/MarkerAtom';
import { useDeleteMarkers } from '@/hooks/api/marker/useDeleteMarkers';
import { useMarkerList } from '@/hooks/api/marker/useMarkerList';
import { useAuth } from '@/hooks/auth/useAuth';

import { Delete } from '../DeleteModal';

type Props = { bookmarkId: number; onPrev: () => void };
export const BookmarkDetail = ({ bookmarkId, onPrev }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  const { token } = useAuth();
  const { data } = useMarkerList(bookmarkId, token);
  const deleteMarkersMutation = useDeleteMarkers();
  const [, setMarkers] = useAtom(markersAtom);

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

  useEffect(() => {
    if (data?.markers?.data) {
      setMarkers(data.markers.data);
    }
  }, [data?.markers?.data, setMarkers]);

  const selectedMarkerName =
    data?.markers.data.find((item) => item.markerId === selectedId)?.title || '마커';

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
          <span className="text-primary mr-2">{data?.bookmarkName}</span>
          리스트
        </Body1>
      </div>
      <ListCard>
        {data?.markers.data.map((item, index) => (
          <div key={item.markerId}>
            <div
              className={`flex flex-row justify-between gap-4 items-center ${index !== data.markers.data.length - 1 && 'pb-2'}`}
            >
              <div className="flex flex-col gap-1 py-2">
                <div className="flex flex-row gap-3 items-center">
                  <Body2 className="text-primary">{item.title}</Body2>
                  {typeof item.category === 'object' && (
                    <Chip variant="medium">{item.category.majorCategory}</Chip>
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

            {index < data.markers.data.length - 1 && <hr className="border-dashed pt-2" />}
          </div>
        ))}
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
