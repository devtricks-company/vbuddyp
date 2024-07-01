import {Text} from 'core/components/Text';
import {getSubscriptionsAtom} from 'features/home/atoms/getSubscriptionAtom';
import {homeAtom} from 'features/home/atoms/homeAtom';
import {useAtom, useAtomValue} from 'jotai';
import {KidsCard} from '../sections/HomeWithKids';
import HomeWithoutKids from '../sections/HomeWithoutKids';
import {useEffect} from 'react';
import {KidsList} from '../sections/KidsList';
import {View} from 'react-native';
import {Container} from 'core/components';
export function HomeScreen() {
  const showHome = useAtomValue(homeAtom);

  const [{data, isPending, isError, error}] = useAtom(getSubscriptionsAtom);

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) return <Text>{error.message}</Text>;
  return (
    <Container flex={1} backgroundColor="#F3F3F3">
      {data!.length < 1 ? <HomeWithoutKids /> : <KidsList kids={data} />}
    </Container>
  );
}
