/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Marker } from '.';

const meta = {
  title: 'components/common/Marker',
  component: Marker,
  tags: ['autodocs'],
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof Marker>;

const categoryNames: Array<
  'restaurant' | 'cafe' | 'bar' | 'shopping' | 'travel' | 'public' | 'hospital' | 'other'
> = ['restaurant', 'cafe', 'bar', 'shopping', 'travel', 'public', 'hospital', 'other'];

export const Basic: Story = {
  args: {
    categoryName: 'restaurant',
  },
  argTypes: {
    categoryName: { control: { type: 'select' }, options: categoryNames },
  },
  render: (args) => {
    return <Marker {...args} />;
  },
};

export const ALL: Story = {
  render: () => {
    return (
      <>
        {categoryNames.map((item) => (
          <Marker key={item} categoryName={item} />
        ))}
      </>
    );
  },
};
