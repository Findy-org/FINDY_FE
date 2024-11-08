/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomSheet } from '.';
import { Button } from '../Button';
import { Layout } from '../Layout';

const meta = {
  title: 'components/common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Basic: Story = {
  render: () => {
    const [resetTrigger, setResetTrigger] = useState(0);

    const handleClickBottomSheet = () => {
      setResetTrigger((prev) => prev + 1);
    };

    return (
      <Layout>
        <div>
          <Button size="medium" onClick={handleClickBottomSheet} variant="primary">
            Open BottomSheet
          </Button>
          <BottomSheet resetTrigger={resetTrigger}>
            <div className="flex flex-col gap-6 items-center">
              <div>Contents</div>
            </div>
          </BottomSheet>
        </div>
      </Layout>
    );
  },
};
