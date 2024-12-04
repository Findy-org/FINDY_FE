import { forwardRef } from 'react';

import { Props } from './Input.types';

import { Icon } from '../Icon';
import { Body4, Caption } from '../Typography';

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onClickReset, isValid, errorMessage, ...props }, ref) => {
    const helperMessage = !isValid && value.length > 0;

    return (
      <div className="flex flex-col items-start w-full">
        <div className="relative flex items-center w-full">
          <input
            value={value}
            ref={ref}
            placeholder="링크를 입력해주세요."
            className="w-full h-12 text-body3 bg-gray-100 pl-5 pr-10 rounded-lg outline-none focus:outline-1 focus:outline-offset-0 focus:outline-gray-400 transition-colors"
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
          <Body4 className="text-[14px] text-primary mt-1">
            {errorMessage || '유투브 링크 혹은 지도 링크만 가능합니다.'}
          </Body4>
        )}
      </div>
    );
  }
);
