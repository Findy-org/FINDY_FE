/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { iconNames } from '@/assets/icons/index';
import { colorNames } from '@/styles/theme/colors';

import { Icon } from '.';

const meta = {
  title: 'components/common/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    color: 'primary',
    size: 30,
  },
  argTypes: {
    name: { table: { disable: true } },
    color: { control: { type: 'select' }, options: colorNames },
    size: { control: { type: 'number' } },
  },
  render: (args) => {
    return (
      <div className="flex flex-row flex-wrap gap-2">
        {iconNames.map((icon) => (
          <div className="flex-shrink-0 " key={icon}>
            <Icon {...args} name={icon} />
          </div>
        ))}
      </div>
    );
  },
};
