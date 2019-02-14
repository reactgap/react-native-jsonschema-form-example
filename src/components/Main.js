// @flow

import React from 'react'
import { createBottomTabNavigator,
  createStackNavigator,
  type NavigationScreenConfig,
  type NavigationStackScreenOptions } from 'react-navigation'
import Dashboard from './Dashboard'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Screen1 from './Screen1'
import csstyles from '../csstyles'
import TabBar from './TabBar/TabBar'
import NavTitle from './NavTitle'


const MainRootNavigationOptions: NavigationScreenConfig<NavigationStackScreenOptions> = ({
  navigation,
  navigationOptions,
  screenProps
}) => {
  let titleCode = 'MENU_DASHBOARD'

  switch (navigation.state.index) {
  case 0:
    titleCode = 'FORM_1'
    break
  case 1:
    titleCode = 'FORM_2'
    break
  case 2:
    titleCode = 'FORM_3'
    break
  case 3:
    titleCode = 'FORM_4'
    break
  default:
    break
  }

  return {
    headerLeft: <NavTitle titleCode={titleCode} />,
    headerTitle: null,
    headerTintColor: csstyles.vars.csGreen,
    headerTruncatedBackTitle: true,
    headerRight: null,
    headerStyle: csstyles.nav.header
  }
}

const MainRoot = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator(
      {
        Dashboard: {
          screen: Dashboard1
        },
        Dashboard1: {
          screen: Dashboard
        },
        Dashboard2:  {
          screen: Dashboard2
        }
      },
      {
        tabBarComponent: TabBar,
        tabBarOptions: {
          activeTintColor: csstyles.vars.csWhite,
          activeBackgroundColor: csstyles.vars.csGrey,
          inactiveTintColor: csstyles.vars.csGreen,
          inactiveBackgroundColor: csstyles.vars.csGrey,
          style: {
            backgroundColor: csstyles.vars.csGrey
          },
          labelStyle: {
            ...csstyles.text.regular,
            fontSize: 9,
            marginBottom: 4,
            marginTop: 0
          },
          tabStyle: {}
        }
      }
    ),
    navigationOptions: MainRootNavigationOptions
  },
  screen1: {
    screen: Screen1,
    navigationOptions: {
      header: null,
      headerStyle: csstyles.nav.header
    }
  }
  // Damage: {
  //   screen: Damage,
  //   navigationOptions: {
  //     header: null,
  //     headerStyle: csstyles.nav.header
  //   }
  // },
  // Chainsure: {
  //   screen: Chainsure,
  //   navigationOptions: {
  //     header: null,
  //     headerStyle: csstyles.nav.header
  //   }
  // },
  // DamageReport: {
  //   screen: DamageReport,
  //   navigationOptions: {
  //     header: null,
  //     headerStyle: csstyles.nav.header
  //   }
  // },
  // ProductBuy: {
  //   screen: ProductBuy,
  //   navigationOptions: {
  //     header: null,
  //     headerStyle: csstyles.nav.header
  //   }
  // },
  // ChainsureBuy: {
  //   screen: ChainsureBuy,
  //   navigationOptions: {
  //     header: null,
  //     headerStyle: csstyles.nav.header
  //   }
  // }
})

// const User = createStackNavigator({
//   Profile: {
//     screen: Profile
//   }
// })

// const Payment = createStackNavigator({
//   PayPalCheckout: {
//     screen: PayPalCheckout
//   }
// })

const Main = createStackNavigator(
  {
    MainRoot
    // User,
    // Payment
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      swipeEnabled: false
    }
  }
)

export default Main
