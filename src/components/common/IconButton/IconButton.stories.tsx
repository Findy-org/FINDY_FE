/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '.';

const meta = {
  title: 'components/common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <div className="flex flex-row flex-wrap gap-2">
        <IconButton name="map" />
        <IconButton name="link" />
        <IconButton name="bookMark" isActive={value} onClick={() => setValue(!value)} />
      </div>
    );
  },
};

export const BookMark: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <div className="flex flex-row gap-4">
        <IconButton name="bookMark" isActive={value} onClick={() => setValue(!value)} />
      </div>
    );
  },
};
