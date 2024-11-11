import { forwardRef } from 'react';

import { Props } from './ListCard.types';

export const ListCard = forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <div className="w-full h-fit py-6 pl-6 pr-3.5 rounded-2xl bg-gray-100" {...props} ref={ref}>
      {children}
    </div>
  );
});
