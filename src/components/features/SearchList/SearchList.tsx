import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body2, Body4 } from '@/components/common/Typography';
import { Place } from '@/types/naver';

import { Login } from '../LoginModal';

type Props = { places: Place[]; onNext: () => void };
export const SearchList = ({ places, onNext }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleSelect = (place: Place) => {
    setSelectedPlace((prev) => (prev === place ? null : place));
  };

  const handleSave = () => {
    if (!selectedPlace) {
      setIsOpen(true);
      return;
    }
    onNext();
  };
  // TODO 추가 구현 필요
  return (
    <div className="flex flex-col gap-4">
      <ListCard>
        {/* TODO 컴포넌트화 */}
        {places.map((item, index) => (
          <>
            <div
              key={`${item.title}-${item.address}`}
              className={`flex flex-row justify-between items-center ${index !== places.length - 1 && 'pb-2'}`}
            >
              <div className="flex flex-col gap-1 py-2">
                <div className="flex flex-row gap-3 items-center">
                  <Body2 className="text-primary">{item.title}</Body2>
                  {typeof item.category === 'string' && (
                    <Chip variant="medium">{item.category}</Chip>
                  )}
                </div>
                <Body4 className="pt-1 " weight="normal">
                  {item.address}
                </Body4>
              </div>
              <Icon
                name="check"
                className="cursor-pointer h-7"
                color={selectedPlace === item ? 'primary' : 'gray'}
                onClick={() => handleSelect(item)}
              />
            </div>
            {index < places.length - 1 && <hr className="border-dashed pt-2" />}
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
