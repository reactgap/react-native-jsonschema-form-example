// @flow

import { createStackNavigator } from 'react-navigation'
import Walkthough from '../../containers/Walkthough/Walkthough'
import csstyles from '../../csstyles'
import PhoneRegister from '../../containers/Auth/PhoneRegister/PhoneRegister'
import PhoneVerify from '../../containers/Auth/PhoneVerify/PhoneVerify'
import Profile from '../../containers/Profile/Profile'

const Start = createStackNavigator(
  {
    Walkthough: {
      screen: Walkthough
    },
    PhoneRegister: {
      screen: PhoneRegister
    },
    PhoneVerify: {
      screen: PhoneVerify
    },
    Profile: {
      screen: Profile
    },
  },
  {
    headerMode: 'none'
  }
)

export default Start
