/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { sideMenuItem } from '@/constants/sideMenuItem';

import { SideMenu } from '.';

const meta = {
  title: 'components/common/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Basic: Story = {
  args: {
    variant: 'gps',
    position: 'left',
  },
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['gps', 'link', 'bookMark'] },
    position: { control: { type: 'radio' }, options: ['left', 'right'] },
  },
  render: (args) => {
    return (
      <div className=" flex flex-col gap-4 justify-center items-center">
        <SideMenu {...args} />
      </div>
    );
  },
};

export const Group: Story = {
  render: () => {
    return (
      <div className=" flex flex-col gap-4 justify-center items-center">
        <SideMenu.Group>
          {sideMenuItem.map((variant) => (
            <SideMenu key={variant} variant={variant} />
          ))}
        </SideMenu.Group>
      </div>
    );
  },
};
