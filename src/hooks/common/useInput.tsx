import { ChangeEventHandler, useCallback, useRef, useState } from 'react';

export const useInput = (initialValue = '', validation: string[] = ['youtube', 'www']) => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const ref = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const value = e.target.value;
    setState(value);
  }, []);

  const onBlur = useCallback(() => {
    if (state.length > 0) {
      setIsValid(validation.some((criteria) => state.includes(criteria)));
    }
  }, [state, validation]);

  const onClickReset = useCallback(() => {
    setState(initialValue);
    setIsValid(true);
    if (ref.current) {
      ref.current.focus();
    }
  }, [initialValue]);

  return { state, onChange, onBlur, onClickReset, isValid, ref };
};
