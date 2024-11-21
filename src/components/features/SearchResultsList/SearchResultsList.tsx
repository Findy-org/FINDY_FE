import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body1, Body2, Body4 } from '@/components/common/Typography';
import { NewMarker } from '@/hooks/api/marker/useNewMarker';
import { useAuth } from '@/hooks/auth/useAuth';
import { Place } from '@/types/naver';

import { Login } from '../LoginModal';

type Props = {
  places: Place[];
  onNext: () => void;
  onSelect: (place: NewMarker) => void;
};
export const SearchResultsList = ({ places, onNext, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { token } = useAuth();

  const handleSelect = (index: number) => {
    const newIndex = selectedIndex === index ? null : index;
    setSelectedIndex(newIndex);
  };

  const handleSave = () => {
    if (selectedIndex === null || !token) {
      setIsOpen(true);
      return;
    }
    onSelect(places[selectedIndex] as NewMarker);
    onNext();
  };

  return (
    <div className="flex flex-col gap-4">
      <Body1 className="my-3 mx-3">검색 결과</Body1>
      <ListCard>
        {places.map((item, index) => (
          <div
            key={`${item.title}-${item.address}`}
            className={`flex flex-row justify-between items-center cursor-pointer ${index !== places.length - 1 && 'pb-2'}`}
          >
            <div className="flex flex-col gap-1 py-2">
              <div className="flex flex-row gap-3 items-center">
                <Body2 className="text-primary">{item.title}</Body2>
                {typeof item.category === 'string' && <Chip variant="medium">{item.category}</Chip>}
              </div>
              <Body4 className="pt-1" weight="normal">
                {item.address}
              </Body4>
            </div>
            <Icon
              name="check"
              className="cursor-pointer h-7"
              color={selectedIndex === index ? 'primary' : 'gray'}
              onClick={() => handleSelect(index)}
            />
          </div>
        ))}
      </ListCard>
      <Button variant="primary" size="large" onClick={handleSave}>
        다음
      </Button>
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
