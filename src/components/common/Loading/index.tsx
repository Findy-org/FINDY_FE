import { cn } from '@/lib/core';

import { Props } from './Loading.types';

export const Loading = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'w-full max-w-md space-y-3 p-4 flex flex-col items-center justify-start',
        className
      )}
    >
      <div className="flex items-center gap-4 w-full">
        <div className="w-16 h-16 rounded-full bg-gray-100 animate-pulse"></div>
        <div className="flex-1 space-y-2 w-full">
          <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="w-full bg-gray-100 h-[28rem] animate-pulse rounded-lg"></div>
    </div>
  );
};
