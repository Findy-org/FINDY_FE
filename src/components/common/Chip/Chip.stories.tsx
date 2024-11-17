/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '.';

const meta = {
  title: 'components/common/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    variant: 'medium',
    children: '카페',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
  },
  render: (args) => {
    return <Chip variant={args.variant}>{args.children}</Chip>;
  },
};
