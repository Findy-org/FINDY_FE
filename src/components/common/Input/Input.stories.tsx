/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { useInput } from '@/hooks/common/useInput';

import { Input } from '.';

const meta = {
  title: 'components/common/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => {
    const { state, onChange, onClickReset, isValid, onBlur, ref } = useInput();
    return (
      <div className=" max-w-96 w-full">
        <Input
          value={state}
          onChange={onChange}
          onBlur={onBlur}
          onClickReset={onClickReset}
          isValid={isValid}
          ref={ref}
        />
      </div>
    );
  },
};
