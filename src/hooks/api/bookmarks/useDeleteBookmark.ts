import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { del } from '@/lib/axios';

type DeleteBookmarkParams = {
  token: string;
  bookmarkId: number;
};

export const useDeleteBookmark = (): UseMutationResult<
  unknown,
  AxiosError,
  DeleteBookmarkParams
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ token, bookmarkId }: DeleteBookmarkParams) => {
      return await del(`api/bookmarks/${bookmarkId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarklist'] });
    },
  });
};
