import { atomWithMutation } from 'jotai-tanstack-query'
import { kidSubscription } from '../apis'
import { AxiosError } from 'axios'
import { BaseResponse } from 'core/types/axios'

export const subscriptionAtom = atomWithMutation(get => ({
  mutationKey: ['subscription'],
  mutationFn: async (uuid: string) => await kidSubscription(uuid),

  onSuccess: (data: BaseResponse, variables: string, context: unknown) => {},
  onError: (error: AxiosError, variables: string, context: unknown) => {
    console.log('eeeeeeeeee', variables)
  },
}))
