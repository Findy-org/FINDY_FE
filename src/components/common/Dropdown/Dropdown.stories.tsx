/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'components/common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState('전체');

    return (
      <Dropdown
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
    );
  },
};
