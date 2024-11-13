import { useReducer } from 'react';

type Action = { type: 'SET_LINK'; payload: YoutubeLink };

export type ContextProps<T> = {
  context: { state: T; setState: (newState: T) => void };
};

export type YoutubeLink = {
  youtubeLink: string;
};

export const useYoutubeContext = () => {
  const [linkData, dispatch] = useReducer(reducer, initial());

  return [linkData, dispatch] as const;
};

const initial = (): YoutubeLink => ({
  youtubeLink: '',
});

const reducer = (state: YoutubeLink, action: Action): YoutubeLink => {
  switch (action.type) {
    case 'SET_LINK':
      return { ...state, youtubeLink: action.payload.youtubeLink };
    default:
      return state;
  }
};
