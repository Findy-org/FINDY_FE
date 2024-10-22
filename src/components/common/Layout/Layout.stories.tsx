/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '.';
import { Body1 } from '../Typography';

const meta = {
  title: 'components/common/Layout',
  component: Layout,
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof Layout>;

export const Basic: Story = {
  render: () => {
    return (
      <Layout>
        <div className="w-full h-screen bg-gray-50 flex justify-center items-center opacity-40">
          <Body1>핀디, 순간을 PIN에 담아보세요!</Body1>
        </div>
      </Layout>
    );
  },
};
