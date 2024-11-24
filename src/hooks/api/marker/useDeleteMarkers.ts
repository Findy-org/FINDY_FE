import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { del } from '@/lib/axios';

type DeleteMarkProps = {
  token: string;
  markerId: number;
};

export const useDeleteMarkers = (): UseMutationResult<unknown, AxiosError, DeleteMarkProps> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ token, markerId }: DeleteMarkProps) => {
      return await del(`api/markers/${markerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marker'] });
    },
  });
};
