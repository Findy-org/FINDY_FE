import { useReducer } from 'react';

type Action = { type: 'link'; payload: YoutubeLink };

export type FormData<T> = {
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
    case 'link':
      return { ...state, youtubeLink: action.payload.youtubeLink };
    default:
      return state;
  }
};
