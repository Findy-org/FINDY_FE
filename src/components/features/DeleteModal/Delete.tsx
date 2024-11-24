import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { Body1 } from '@/components/common/Typography';

import { Props } from './Delete.types';

export const Delete = ({ item, onClickDelete, isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClickOutside={() => setIsOpen(false)}>
      <div className="flex flex-col gap-6 items-center">
        <Body1 className="text-center mt-4">{`${item}를 삭제하시겠습니까?`}</Body1>
        <div className="flex flex-row gap-4 items-center mb-1.5 max-w-80">
          <Button variant="primary" size="medium" onClick={() => setIsOpen(false)}>
            취소
          </Button>
          <Button variant="gray" size="medium" onClick={onClickDelete}>
            삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
};
