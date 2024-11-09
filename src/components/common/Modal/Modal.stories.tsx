/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Body1 } from '../Typography';

const meta = {
  title: 'components/common/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickModal = () => setIsOpen(!isOpen);

    return (
      <>
        <Button variant="primary" size="medium" onClick={handleClickModal}>
          Open Modal
        </Button>
        <Modal isOpen={isOpen} onClickOutside={() => setIsOpen(false)}>
          <div className="flex flex-col gap-6 items-center ">
            <Body1 className="text-center mt-4">{`저장 기능은 회원 전용이에요.\n지금 로그인하시겠어요?`}</Body1>
            <div className="flex flex-row gap-6 items-center mb-1.5">
              <Icon name="naverLogin" size={60} />
              <Icon name="kakaoLogin" size={60} />
            </div>
            <Button variant="gray" size="medium" onClick={handleClickModal}>
              비회원으로 계속하기
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};
