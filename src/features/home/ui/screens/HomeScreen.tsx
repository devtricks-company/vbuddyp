import { Text } from 'core/components/Text'
import { getSubscriptionsAtom } from 'features/home/atoms/getSubscriptionAtom'
import { homeAtom } from 'features/home/atoms/homeAtom'
import { useAtom, useAtomValue } from 'jotai'
import { KidsCard } from '../sections/HomeWithKids'
import HomeWithoutKids from '../sections/HomeWithoutKids'
export function HomeScreen() {
  const showHome = useAtomValue(homeAtom)

  // const [{ data, isPending, isError, error }] = useAtom(getSubscriptionsAtom)
  // if (isPending) {
  //   return <Text>Loading...</Text>
  // }

  // if (isError) return <Text>{error.message}</Text>
  return <>{!showHome ? <HomeWithoutKids /> : <KidsCard />}</>
}
