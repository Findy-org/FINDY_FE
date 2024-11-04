import { ReactElement, ReactNode, useState } from 'react';

export type StepProps = {
  name: string;
  children: ReactNode;
};

export type FunnelProps = {
  children: Array<ReactElement<StepProps>>;
};

export const useFunnel = (initStep: string) => {
  const [step, setStep] = useState(initStep);

  const Step = ({ children }: StepProps): ReactElement => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep };
};
