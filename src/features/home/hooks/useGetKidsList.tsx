import { useAtom } from 'jotai'
import { getSubscriptionsAtom } from '../atoms/getSubscriptionAtom'
export function useKidsList() {
  const [
    {
      data: subscriptionsData,
      isPending: isSubscriptionsPendding,
      isError: isSubscriptionsError,
      error: subscriptionsError,
    },
  ] = useAtom(getSubscriptionsAtom)

  return { subscriptionsData, isSubscriptionsError, isSubscriptionsPendding, subscriptionsError }
}
