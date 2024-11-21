import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body1, Body2, Body3 } from '@/components/common/Typography';
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
  const { data } = useBookMarkList(token);
  const { clearMarkers } = useMarkers();
  const [bookmarkId, setBookmarkId] = useState<number>(0);
  const mutation = useNewMarker(bookmarkId, token);

  const handleToggleSelect = (id: number) => {
    setBookmarkId((prev) => (prev === id ? 0 : id));
  };

  const handleSave = () => {
    if (bookmarkId !== 0 && selectedPlace) {
      mutation.mutate(selectedPlace, {
        onSuccess: () => {
          sessionStorage.removeItem('bottomSheetType');
          sessionStorage.removeItem('mapData');
          clearMarkers();
          onNext();
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <Body1 className="my-3 mx-3">북마크 리스트</Body1>
      <ListCard>
        {data?.data.map((item, index) => (
          <>
            <div key={item.bookmarkId} className={`flex flex-row justify-between items-center `}>
              <div className="flex flex-row gap-4 py-2.5 items-center justify-center">
                {item.youtuberProfile ? (
                  <img
                    src={item.youtuberProfile}
                    className="w-12 h-12 rounded-full"
                    alt={`${item.name}의 프로필 이미지`}
                  />
                ) : (
                  <Icon name="findy1" className="w-11 h-11" />
                )}
                <div className="flex flex-col py-1">
                  <Body2 weight="medium">{item.name}</Body2>
                  <div className="flex flex-row items-center gap-1">
                    <Icon name="location" size={15} />
                    <Body3 className=" text-gray-500">{item.markersCount}</Body3>
                  </div>
                </div>
              </div>
              {item.bookmarkType !== 'YOUTUBE' && (
                <Icon
                  name="check"
                  className="cursor-pointer h-7"
                  color={bookmarkId === item.bookmarkId ? 'primary' : 'gray'}
                  onClick={() => handleToggleSelect(item.bookmarkId)}
                />
              )}
            </div>
            {index < data.data.length - 1 && <hr className="border-dashed pt-2" />}
          </>
        ))}
      </ListCard>
      <Button variant="primary" size="large" onClick={handleSave}>
        저장하기
      </Button>
    </div>
  );
};
