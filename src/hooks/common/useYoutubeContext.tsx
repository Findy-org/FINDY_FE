import { useReducer } from 'react';

type Action = { type: 'SET_LINK'; payload: string };

export type ContextProps<T> = {
  context: { state: T; setState: (newState: T) => void };
};

export type Link = {
  link: string;
};

export const useYoutubeContext = () => {
  const [linkData, dispatch] = useReducer(reducer, initial());
  return [linkData, dispatch] as const;
};

const initial = (): Link => ({
  link: '',
});

const reducer = (state: Link, action: Action): Link => {
  switch (action.type) {
    case 'SET_LINK':
      return { ...state, link: action.payload };
    default:
      return state;
  }
};
