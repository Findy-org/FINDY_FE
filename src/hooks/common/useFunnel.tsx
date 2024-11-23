import { ReactElement, ReactNode, useMemo, useState } from 'react';

export type StepProps = {
  name: string;
  children: ReactNode;
};

export type FunnelProps = {
  children: Array<ReactElement<StepProps>>;
};

export const useFunnel = <T extends string>(initStep: T) => {
  const [step, setStep] = useState<T>(initStep);

  const Step = ({ children }: StepProps): ReactElement => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = useMemo(
      () => children.find((childStep) => childStep.props.name === step),
      [children]
    );

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep };
};
