/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PlaceItem } from '.';
import { ListCard } from '../ListCard';

const meta = {
  title: 'components/common/PlaceItem',
  component: PlaceItem,
  tags: ['autodocs'],
} satisfies Meta<typeof PlaceItem>;

export default meta;
type Story = StoryObj<typeof PlaceItem>;

export const Basic: Story = {
  args: {
    isLast: true,
    isEditing: false,
    onToggleSelect: () => {},
  },
  argTypes: {
    isLast: {
      control: 'boolean',
    },
    isEditing: {
      control: 'boolean',
    },
    onToggleSelect: {
      action: 'onToggleSelect',
    },
  },
  render: (args) => {
    const [select, setSelect] = useState<boolean>(args.isSelected);

    const place = {
      title: '명지대학교',
      address: '서울특별시 서대문구 거북골로 34',
      category: '교육',
      mapx: '123',
      mapy: '456',
    };
    return (
      <ListCard>
        <PlaceItem
          {...args}
          place={place}
          isSelected={select}
          onToggleSelect={() => setSelect(!select)}
        />
      </ListCard>
    );
  },
};
