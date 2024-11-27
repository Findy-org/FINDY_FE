/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from '.';
import { ListCard } from '../ListCard';

const meta = {
  title: 'components/common/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof Profile>;

export const Basic: Story = {
  render: () => {
    const youtuberInfo = [
      {
        bookmarkId: 1,
        name: '강민경',
        youtuberProfile:
          'https://yt3.ggpht.com/ytc/AIdro_mieTH2WSE4oBMmczfLHB3HhikzOg1nz9tFD-MLad93Xnw=s88-c-k-c0x00ffffff-no-rj',
        markersCount: 33,
        bookmarkType: 'youtuber',
        youtubeLink: 'https://www.youtube.com/watch?v=123',
      },
      {
        bookmarkId: 2,
        name: '김세빈 저장소',
        youtuberProfile: '',
        markersCount: 3,
        bookmarkType: 'naver',
        youtubeLink: 'https://www.youtube.com/watch?v=123',
      },
    ];

    return (
      <ListCard>
        {youtuberInfo.map((item, index) => (
          <Profile
            key={item.bookmarkId}
            item={item}
            onSelect={() => {}}
            isLast={index === youtuberInfo.length - 1}
          />
        ))}
      </ListCard>
    );
  },
};
