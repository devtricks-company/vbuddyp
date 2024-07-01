import {atomWithMutation, atomWithQuery} from 'jotai-tanstack-query';
import {kidLevels, kidSubscription} from '../apis';
import {AxiosError} from 'axios';
import {BaseResponse} from 'core/types/axios';
import {atom} from 'jotai';
import {number} from 'zod';

export const kidIdAtom = atom<number | null>(null);
export const subscriptionAtom = atomWithMutation(get => ({
  mutationKey: ['subscription'],
  mutationFn: async (uuid: string) => await kidSubscription(uuid),

  onSuccess: (data: BaseResponse, variables: string, context: unknown) => {},
  onError: (error: AxiosError, variables: string, context: unknown) => {
    console.log('eeeeeeeeee', variables);
  },
}));

export const getLevelsAtom = atomWithQuery(get => ({
  queryKey: ['levels', get(kidIdAtom)],
  queryFn: async ({queryKey: [, id]}) => await kidLevels(Number(id)),
}));
