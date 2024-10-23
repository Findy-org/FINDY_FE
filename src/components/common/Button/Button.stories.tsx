/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: '확인',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'gray'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['medium', 'large'],
    },
  },
  render: (args) => (
    <div className="max-w-96">
      <Button {...args}>{args.children}</Button>
    </div>
  ),
};
