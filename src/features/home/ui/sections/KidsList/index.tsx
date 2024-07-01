import {Kid} from 'features/kids/types/kids.types';
import {FlatList, Text} from 'react-native';
import {KidsCard} from '../HomeWithKids';
import {Container} from 'core/components';

type KidsListProps = {
  kids?: Kid[];
};

export function KidsList({kids}: KidsListProps) {
  return (
    <Container flex={1}>
      <FlatList
        data={kids}
        renderItem={({item}) => <KidsCard kid={item} />}
        keyExtractor={kid => String(kid.id)}
      />
    </Container>
  );
}
