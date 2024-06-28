import Providers from 'core/providers'
import AppNavigator from './navigators'
function App() {
  // const setProfile = useSetAtom(profileAtom)
  // const setUserId = useSetAtom(userIdAtom)
  // setProfile(null)
  // setUserId(null)

  return (
    <Providers>
      <AppNavigator />
    </Providers>
  )
}

export default App
