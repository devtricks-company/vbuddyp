import { Container } from 'core/components'
import { DropDown } from 'core/components/Input/DropDown'
import { FormInputItem } from 'core/schemas/form.schemas'
import { Button } from 'core/components/Button'
import { Text } from 'react-native'
import { CubeIcon } from 'react-native-heroicons/outline'

export function KidDetails() {
  const LevelOption: FormInputItem[] = [
    { name: '21', id: '1' },
    { name: '22', id: '2' },
  ]
  return (
    <Container flex={1} backgroundColor="#F3F3F3" alignItems={'center'}>
      <Container mt={30} width={'80%'}>
        <DropDown
          placeholder="Selected Level"
          value={undefined}
          items={LevelOption ?? []}
          onChange={() => {}}
          itemToString={item => item?.name ?? ''}
          backgroundColor="#A55BDE"
          placeholderTextColor="#FFF"
        />

        <Container mt={45} border={'3px solid #FFF'} borderRadius={15} padding={20}>
          <Container>
            <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Container flexDirection={'row'} alignItems={'center'}>
                <CubeIcon color="#666" />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#666',
                    marginLeft: 10,
                  }}>
                  Spent Time
                </Text>
              </Container>
              <Container>
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#666',
                    marginLeft: 10,
                  }}>
                  26 min
                </Text>
              </Container>
            </Container>
            <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
          </Container>
          <Container mt={3}>
            <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Container flexDirection={'row'} alignItems={'center'}>
                <CubeIcon color="#666" />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#666',
                    marginLeft: 10,
                  }}>
                  Score
                </Text>
              </Container>
              <Container>
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#666',
                    marginLeft: 10,
                  }}>
                  506
                </Text>
              </Container>
            </Container>
            <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
          </Container>
          <Container mt={3}>
            <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Container flexDirection={'row'} alignItems={'center'}>
                <CubeIcon color="#666" />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#666',
                    marginLeft: 10,
                  }}>
                  Remain steps
                </Text>
              </Container>
              <Container>
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#666',
                    marginLeft: 10,
                  }}>
                  5
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
