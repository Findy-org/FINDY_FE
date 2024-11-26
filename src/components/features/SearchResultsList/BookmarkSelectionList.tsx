import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/common/Button';
import { ListCard } from '@/components/common/ListCard';
import { Profile } from '@/components/common/Profile';
import { Body1 } from '@/components/common/Typography';
import { useBookMarkList } from '@/hooks/api/bookmarks/useBookMarkList';
import { NewMarker, useNewMarker } from '@/hooks/api/marker/useNewMarker';
import { useAuth } from '@/hooks/auth/useAuth';
import { useMarkers } from '@/hooks/common/useMarkers';

type Props = {
  onNext: () => void;
  selectedPlace: NewMarker;
};

export const BookmarkSelectionList = ({ selectedPlace, onNext }: Props) => {
  const { token } = useAuth();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useBookMarkList(token);
  const { clearMarkers } = useMarkers();
  const [bookmarkId, setBookmarkId] = useState<number>(0);
  const mutation = useNewMarker(bookmarkId, token);
  const observerTarget = useRef<HTMLDivElement>(null);

  const handleToggleSelect = (id: number) => {
    setBookmarkId((prev) => (prev === id ? 0 : id));
  };

  const handleSave = () => {
    if (bookmarkId !== 0 && selectedPlace) {
      mutation.mutate(selectedPlace, {
        onSuccess: () => {
          sessionStorage.clear();
          clearMarkers();
          onNext();
        },
      });
    }
  };

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
    <div className="flex flex-col gap-4">
      <Body1 weight="semibold" className="my-3 mx-3">
        북마크 리스트
      </Body1>
      <ListCard>
        {data?.pages
          .flatMap((page) => page.data)
          .map((item, index) => (
            <Profile
              item={item}
              onSelect={handleToggleSelect}
              selectedId={bookmarkId}
              isEditing={true}
              isLast={index === data.pages.flatMap((page) => page.data).length - 1}
            />
          ))}
        <div ref={observerTarget} />
      </ListCard>
      <Button variant="primary" size="large" onClick={handleSave} disabled={bookmarkId === 0}>
        저장하기
      </Button>
    </div>
  );
};
