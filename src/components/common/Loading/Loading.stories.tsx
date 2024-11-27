/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from '.';

const meta = {
  title: 'components/common/Loading',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <Loading className="h-40" />
      </>
    );
  },
};
