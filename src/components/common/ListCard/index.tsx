import { forwardRef } from 'react';

import { Props } from './ListCard.types';

export const ListCard = forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <div className="w-full h-fit py-5 pl-6 pr-5 rounded-2xl bg-gray-50" {...props} ref={ref}>
      {children}
    </div>
  );
});
