import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { ListCard } from '@/components/common/ListCard';
import { PlaceItem } from '@/components/common/PlaceItem';
import { Body1 } from '@/components/common/Typography';
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
      <Body1 className="mt-2 mx-3">검색 결과</Body1>
      <ListCard>
        {places.map((item, index) => (
          <PlaceItem
            key={index}
            place={item}
            isEditing={true}
            isSelected={selectedIndex === index}
            onToggleSelect={() => handleSelect(index)}
            isLast={index === places.length - 1}
          />
        ))}
      </ListCard>
      <Button variant="primary" size="large" onClick={handleSave}>
        다음
      </Button>
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
