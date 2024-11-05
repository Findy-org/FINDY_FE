/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';
import { Icon } from '../Icon';

const meta = {
  title: 'components/common/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div className="shadow-md">
          <Header left={<Icon name="home" size={20} />} />
        </div>
      </div>
    );
  },
};

export const WithMiddle: Story = {
  render: () => {
    return (
      <div className="shadow-md">
        <Header
          left={<Icon name="home" size={20} />}
          middle={<Icon name="findyLogo1" size={60} />}
        />
      </div>
    );
  },
};

export const WithMiddleAndRight: Story = {
  render: () => {
    return (
      <div className="shadow-md">
        <Header
          left={<Icon name="home" size={20} />}
          middle={<Icon name="findyLogo1" size={100} />}
          right={<Icon name="user" size={20} />}
        />
      </div>
    );
  },
};
