/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { MARKER_CATEGORIES } from '@/constants/categories';

import { Marker } from '.';

const meta = {
  title: 'components/common/Marker',
  component: Marker,
  tags: ['autodocs'],
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof Marker>;

export const Basic: Story = {
  args: {
    categoryName: 'restaurant',
  },
  argTypes: {
    categoryName: { control: { type: 'select' }, options: MARKER_CATEGORIES },
  },
  render: (args) => {
    return <Marker {...args} />;
  },
};

export const ALL: Story = {
  render: () => {
    return (
      <>
        {MARKER_CATEGORIES.map((item) => (
          <Marker key={item} categoryName={item} />
        ))}
      </>
    );
  },
};
