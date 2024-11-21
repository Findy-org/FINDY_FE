import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body2, Body3, Body4 } from '@/components/common/Typography';
import { useYoutubeBookmark } from '@/hooks/api/bookmarks/useYoutubeBookmark';
import { YoutubeResponse } from '@/hooks/api/link/useYoutubePlace';
import { useAuth } from '@/hooks/auth/useAuth';
import { useMarkers } from '@/hooks/common/useMarkers';

import { Login } from '../LoginModal';

type Props = { places: YoutubeResponse; onNext: () => void };
export const ExtractedPlacesList = ({ places, onNext }: Props) => {
  const { clearMarkers } = useMarkers();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { token } = useAuth();
  const { mutate: bookmarkMutate } = useYoutubeBookmark(token);

  const handleToggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    if (!token) {
      setIsOpen(true);
      return;
    }

    const savePlaces = {
      ...places,
      places: places.places
        .filter((place) => selectedIds.includes(place.id as number))
        .map(({ id, ...placeData }) => placeData),
    };

    bookmarkMutate(savePlaces, {
      onSuccess: () => {
        sessionStorage.clear();
        clearMarkers();
        onNext();
      },
    });
  };
  return (
    <div className="flex flex-col gap-4 p-3">
      <div className="flex flex-row gap-4 py-2">
        {/* TODO : 이미지가 없을 경우 대체 이미지 추가 */}
        <img
          src={places.youtuberProfile}
          className="w-12 h-12 rounded-full"
          alt={`${places.youtuberName}의 프로필 이미지`}
        />
        <div className="flex flex-col ">
          <Body2 weight="medium">{places.youtuberName}</Body2>
          <div className="flex flex-row items-center gap-1">
            <Icon name="location" size={20} />
            <Body3 className=" text-gray-500">{places.places.length}</Body3>
          </div>
        </div>
      </div>
      <ListCard>
        {/* TODO 컴포넌트화 */}
        {places.places.map((item, index) => (
          <>
            <div
              key={`${item.title}-${item.address}`}
              className={`flex flex-row justify-between items-center ${index !== places.places.length - 1 && 'pb-2'}`}
            >
              <div className="flex flex-col gap-1 py-2">
                <div className="flex flex-row gap-3 items-center">
                  <Body2 className="text-primary">{item.title}</Body2>
                  {typeof item.category === 'object' && (
                    <Chip variant="medium">{item.category.majorCategory}</Chip>
                  )}
                </div>
                <Body4 className="pt-1" weight="normal">
                  {item.address}
                </Body4>
              </div>
              <Icon
                name="check"
                className="cursor-pointer h-7 w-7 flex-shrink-0"
                color={selectedIds.includes(item.id as number) ? 'primary' : 'gray'}
                onClick={() => handleToggleSelect(item.id as number)}
              />
            </div>
            {index < places.places.length - 1 && <hr className="border-dashed pt-2" />}
          </>
        ))}
      </ListCard>
      <Button variant="primary" size="large" onClick={handleSave}>
        저장하기
      </Button>
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
