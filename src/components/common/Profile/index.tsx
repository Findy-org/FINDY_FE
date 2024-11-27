import { forwardRef } from 'react';

import { findyIconNames } from '@/constants/findyIcons';

import { Props } from './Profile.types';

import { Icon } from '../Icon';
import { Body2, Body3 } from '../Typography';

export const Profile = forwardRef<HTMLDivElement, Props>(
  ({ item, onSelect, selectedId = 0, isEditing = false, isLast = true, ...props }, ref) => {
    return (
      <>
        <div
          ref={ref}
          {...props}
          className="flex flex-row justify-between items-center cursor-pointer"
          onClick={() => onSelect(item.bookmarkId ?? 0)}
        >
          <div className="flex flex-row gap-4 py-2.5 items-center justify-center">
            {item.youtuberProfile ? (
              <img
                src={item.youtuberProfile}
                className="w-12 h-12 rounded-full"
                alt={`${item.name}의 프로필 이미지`}
              />
            ) : (
              <Icon
                name={findyIconNames[item.bookmarkId % findyIconNames.length]}
                className="w-11 h-11"
              />
            )}
            <div className="flex flex-col py-1">
              <Body2 weight="medium">{item.name}</Body2>
              <div className="flex flex-row items-center gap-1">
                <Icon name="location" size={15} />
                <Body3 className=" text-gray-500">{item.markersCount}</Body3>
              </div>
            </div>
          </div>
          {isEditing && item.bookmarkType !== 'YOUTUBE' && (
            <Icon
              name="check"
              className="cursor-pointer h-7 w-7 flex-shrink-0"
              color={selectedId === item.bookmarkId ? 'primary' : 'gray'}
            />
          )}
        </div>
        {!isLast && <hr className="border-dashed pt-2" />}
      </>
    );
  }
);
