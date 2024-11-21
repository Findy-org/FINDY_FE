import { Icon } from '@/components/common/Icon';

import { Props } from './BottomSheetHeader.types';

export const BottomSheetHeader = ({ setIsOpen }: Props) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative mb-4">
      <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
      <button onClick={handleClose} className="absolute right-4 top-0" aria-label="Close">
        <Icon name="deleteRound" size={24} />
      </button>
    </div>
  );
};
