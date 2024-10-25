import { forwardRef } from 'react';

import { Props } from './Input.types';

import { Icon } from '../Icon';
import { Caption } from '../Typography';

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onClickReset, isValid, onBlur, ...props }, ref) => {
    const helperMessage = !isValid && value.length > 0;

    return (
      <div className="flex flex-col items-start w-full">
        <div className="relative flex items-center w-full">
          <input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder="링크를 입력해주세요."
            className="w-full h-11 text-body3 bg-gray-50 pl-5 pr-10 rounded-lg outline-none focus:outline-1 focus:outline-offset-0 focus:outline-gray-500 transition-colors"
            {...props}
          />
          {value && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={onClickReset}
            >
              <Icon name="deleteRound" size={16} />
            </div>
          )}
        </div>
        {helperMessage && (
          <Caption className="text-primary mt-1">유투브 링크 혹은 지도 링크만 가능합니다.</Caption>
        )}
      </div>
    );
  }
);
