/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomSheet } from '.';
import { Button } from '../Button';

const meta = {
  title: 'components/common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickBottomSheet = () => setIsOpen(!isOpen);

    return (
      <>
        <Button variant="primary" size="medium" onClick={handleClickBottomSheet}>
          Open BottomSheet
        </Button>
        {isOpen && (
          <BottomSheet resetTrigger={isOpen}>
            <div className="flex flex-col gap-6 items-center">
              <div>Contents ...</div>
            </div>
          </BottomSheet>
        )}
      </>
    );
  },
};
