import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@/lib/axios';

export type Props = {
  name: string;
};

export const useNewBookMark = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (custom: Props) =>
      post(`api/bookmarks/custom`, custom, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarklist'] });
    },
  });
};
