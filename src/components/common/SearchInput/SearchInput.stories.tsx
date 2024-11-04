/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from '.';

const meta = {
  title: 'components/common/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleChange = (value: string) => {
      setValue(value);
    };
    return (
      <SearchInput
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onClick={() => {}}
      />
    );
  },
};
