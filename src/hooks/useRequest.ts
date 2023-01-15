import { useMutation, UseMutationOptions, useQuery } from "react-query";

type Options = {
  refetchInterval?: number;
  enabled?: boolean;
};

export const useRequest = <T>(
  queryKey: string | string[],
  request: () => Promise<T>,
  options?: Options
) => {
  return useQuery(queryKey, request, { ...options });
};

export const useMutationRequest = <T>(
  request: ([string]: any) => Promise<T>,
  options?: Omit<
    UseMutationOptions<T, unknown, void, unknown>,
    "mutationKey" | "mutationFn"
  >
) => {
  return useMutation(request, { ...options });
};
