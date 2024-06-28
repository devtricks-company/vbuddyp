import { useNavigation } from '@react-navigation/native'
import { AppRoutes, Navigation } from 'app/navigators/types'
import { Button, Container } from 'core/components'
import { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ChevronDownIcon, CubeIcon, ChevronUpIcon } from 'react-native-heroicons/outline'

export function KidsCard() {
  const navigation = useNavigation<Navigation>()
  const [open, setOpen] = useState<boolean>(false)
  const openHandle = () => {
    setOpen(!open)
  }
  return (
    <Container flex={1} alignItems={'center'} backgroundColor="#F3F3F3" pt={20}>
      <Container width={'90%'} backgroundColor="#FFF" minHeight={100} borderRadius={15} p={25}>
        <TouchableOpacity onPress={openHandle}>
          <Container flexDirection={'row'}>
            <Text style={{ fontSize: 18, fontWeight: '600', lineHeight: 21, marginRight: 10 }}>
              Mona Hadi
            </Text>
            {open ? <ChevronUpIcon color={'#000'} /> : <ChevronDownIcon color={'#000'} />}
          </Container>
        </TouchableOpacity>
        <Container>
          <Container mt={15} width={'100%'} height={10} backgroundColor="#D9D9D9" borderRadius={10}>
            <Container
              width={'40%'}
              backgroundColor="#FF8E34"
              height={10}
              borderRadius={10}></Container>
          </Container>
        </Container>
        {open ? (
          <Container mt={45}>
            <Container>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Progress
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
                    27%
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Remaining Level
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
                    23
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Total Score
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
                    2500
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Level
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
                    26
                  </Text>
                </Container>
              </Container>
            </Container>
            <Container mt={4} flexDirection={'row'} justifyContent={'space-around'}>
              <Button
                width={'60%'}
                label="Details"
                onPress={() => navigation.navigate(AppRoutes.KIDDETAILS)}
              />
              <Button width={'30%'} label="Chart" variant="outlined" color="#000" />
            </Container>
          </Container>
        ) : null}
      </Container>
    </Container>
  )
}
