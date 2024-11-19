import { forwardRef } from 'react';

import { Props } from './ListCard.types';

export const ListCard = forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <div
      className="w-full max-h-[65dvh] h-fit py-5 pl-6 pr-5 rounded-2xl bg-gray-50  overflow-y-scroll"
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});
