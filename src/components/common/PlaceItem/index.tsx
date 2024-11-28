import { forwardRef } from 'react';

import { Props } from './PlaceItem.types';

import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { Body2, Body3 } from '../Typography';

export const PlaceItem = forwardRef<HTMLDivElement, Props>(
  ({ place, isSelected, isEditing, onToggleSelect, isLast, ...props }, ref) => (
    <div ref={ref}>
      <div
        onClick={() => onToggleSelect(place.id as number)}
        className={`flex flex-row justify-between items-center cursor-pointer ${!isLast && 'pb-2'}`}
        {...props}
      >
        <div className="flex flex-col gap-1 py-2">
          <div className="flex flex-row gap-3 items-center">
            <Body2 className="text-primary">{place.title}</Body2>
            <Chip variant="medium">
              {typeof place.category === 'object' ? place.category.majorCategory : place.category}
            </Chip>
          </div>
          <Body3 className="pt-1" weight="normal">
            {place.address}
          </Body3>
        </div>
        {isEditing && (
          <Icon
            name="check"
            className="cursor-pointer h-7 w-7 flex-shrink-0 ml-3"
            color={isSelected ? 'primary' : 'gray'}
          />
        )}
      </div>
      {!isLast && <hr className="border-dashed pt-2" />}
    </div>
  )
);
