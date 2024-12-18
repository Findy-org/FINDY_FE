import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { PlaceItem } from '@/components/common/PlaceItem';
import { Body2, Body3 } from '@/components/common/Typography';
import { findyIconNames } from '@/constants/findyIcons';
import { useNaverBookmark } from '@/hooks/api/bookmarks/useNaverBookmark';
import { useYoutubeBookmark } from '@/hooks/api/bookmarks/useYoutubeBookmark';
import { ExtractResponse } from '@/hooks/api/link/useYoutubePlace';
import { useAuth } from '@/hooks/auth/useAuth';
import { useMarkers } from '@/hooks/common/useMarkers';

import { Login } from '../LoginModal';

type Props = { data: ExtractResponse; onNext: () => void };
export const ExtractedPlacesList = ({ data, onNext }: Props) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { token } = useAuth();
  const { clearMarkers } = useMarkers();
  const { mutate: youtubeMutate } = useYoutubeBookmark(token);
  const { mutate: naverMutate } = useNaverBookmark(token);

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
    const savePlaces: ExtractResponse = {
      ...data,
      places: data.places
        .filter((place) => selectedIds.includes(place.id as number))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ id, ...placeData }) => placeData),
    };

    if (data.youtuberId) {
      youtubeMutate(savePlaces, {
        onSuccess: () => {
          sessionStorage.clear();
          clearMarkers();
          onNext();
        },
      });
    }
    if (data.name) {
      naverMutate(savePlaces, {
        onSuccess: () => {
          sessionStorage.clear();
          clearMarkers();
          onNext();
        },
      });
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 py-2">
        {data.youtuberProfile ? (
          <img
            src={data.youtuberProfile || ''}
            className="w-12 h-12 rounded-full "
            alt={`${data.youtuberName}프로필 이미지`}
          />
        ) : (
          <Icon name={findyIconNames[0]} className="w-11 h-11" />
        )}
        <div className="flex flex-col">
          <Body2 weight="semibold">{data.youtuberName ?? data.name}</Body2>
          <div className="flex flex-row items-center gap-1">
            <Icon name="location" size={17} />
            <Body3 className="text-gray-500">{data.places.length}</Body3>
          </div>
        </div>
      </div>
      <ListCard>
        {data?.places.map((item, index) => (
          <PlaceItem
            key={index}
            isEditing={true}
            place={item}
            isSelected={selectedIds.includes(item.id as number)}
            onToggleSelect={() => handleToggleSelect(item.id as number)}
            isLast={index === data?.places.length - 1}
          />
        ))}
      </ListCard>
      <Button variant="primary" size="large" onClick={handleSave}>
        저장하기
      </Button>
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
