/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { ListCard } from '.';
import { Body1 } from '../Typography';

const meta = {
  title: 'components/common/ListCard',
  component: ListCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof ListCard>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <ListCard>
          <Body1>핀디, 순간을 PIN에 담아보세요!</Body1>
        </ListCard>
      </>
    );
  },
};
