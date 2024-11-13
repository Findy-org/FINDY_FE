/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '@/components/common/Layout';
import { linkStepNames } from '@/constants/linkForm';
import { useFunnel } from '@/hooks/common/useFunnel';

import { ExtractionStatus, LinkInput, Landing } from '.';

const meta = {
  title: 'components/feature/LinkForm',
  component: Landing,
  tags: ['autodocs'],
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof Landing>;

export const Basic: Story = {
  render: () => {
    const { Funnel, Step, setStep } = useFunnel(linkStepNames[0]);

    return (
      <Layout>
        <Funnel>
          <Step name="입력전">
            <Landing onNext={() => setStep('링크입력')} onHomeClick={() => {}} />
          </Step>

          <Step name="링크입력">
            <LinkInput
              onNext={() => setStep('추출상태')}
              onHomeClick={() => {}}
              context={{ state: '', setState: () => {} }}
            />
          </Step>

          <Step name="추출상태">
            <ExtractionStatus
              url=""
              place={[]}
              onNext={() => {}}
              isLoading={true}
              onHomeClick={() => {}}
            />
          </Step>
        </Funnel>
      </Layout>
    );
  },
};
