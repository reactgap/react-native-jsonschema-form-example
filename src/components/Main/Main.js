// @flow

import React from 'react'
import { createBottomTabNavigator,
  createStackNavigator,
  type NavigationScreenConfig,
  type NavigationStackScreenOptions } from 'react-navigation'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../../containers/Home/Home'
import csstyles from '../../csstyles'
import TabBar from '../../components/TabBar/TabBar'
import NavTitle from '../../components/NavTitle/NavTitle'
import UserAvatar from '../../components/TabBar/UserAvatar'
import NotificationBadge from '../TabBar/NotificationBadge'
import Profile from '../../containers/Profile/Profile'
import Notifications from '../../containers/Notifications/Notifications'
import Applications from '../../containers/Applications/Applications'
import Report from '../../containers/Report/Report'
import Support from '../../containers/Support/Support'
import ProductScreen from '../Products/ProductScreen'
import ApplicationDetail from '../../containers/Applications/Detail/ApplicationDetail'

const MainRootNavigationOptions: NavigationScreenConfig<NavigationStackScreenOptions> = ({
  navigation,
  navigationOptions,
  screenProps
}) => {
  let titleCode = 'MENU_DASHBOARD'

  switch (navigation.state.index) {
  case 0:
    titleCode = ''
    break
  case 1:
    titleCode = 'APPLICATIONS'
    break
  case 2:
    titleCode = 'REPORT'
    break
  case 3:
    titleCode = 'SUPPORT'
    break
  default:
    break
  }

  return {
    headerLeft: <UserAvatar />,
    headerTitle: <NavTitle titleCode={titleCode} hasLogo={true}/>,
    headerTintColor: csstyles.vars.csGreen,
    headerTruncatedBackTitle: true,
    headerRight: <NotificationBadge />,
    headerStyle: csstyles.nav.header
  }
}

const MainRoot = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator(
      {
        Home: {
          screen: Home
        },
        Bookings: {
          screen: Applications
        },
        Report: {
          screen: Report
        },
        Settings: {
          screen: Support
        }
      },
      {
        tabBarComponent: TabBar,
        tabBarOptions: {
          activeTintColor: csstyles.vars.csOrange,
          activeBackgroundColor: csstyles.vars.csGreen,
          inactiveTintColor: csstyles.vars.csLight,
          inactiveBackgroundColor: csstyles.vars.csGreen,
          style: {
            backgroundColor: csstyles.vars.csGreen
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
  Product: {
    screen: ProductScreen,
    navigationOptions: {
      headerStyle: csstyles.nav.header
    }
  },
  ApplicationDetail: {
    screen: ApplicationDetail,
    navigationOptions: {
      headerStyle: csstyles.nav.header
    }
  }
})

const User = createStackNavigator({
  Profile: {
    screen: Profile
  }
})

const Notify = createStackNavigator({
  List: {
    screen: Notifications
  }
})

const Main = createStackNavigator(
  {
    MainRoot,
    User,
    Notify
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
