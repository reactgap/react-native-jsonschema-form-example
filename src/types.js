// @flow

import { type NavigationScreenProp, type NavigationScreenOptions } from 'react-navigation'

type ScreenNavigationRoute<ParamsType = { [id: string]: * }> = {
  index: number,
  params: ParamsType,
  routes: ScreenNavigationRoute<any>[],
  routeName: string
}

export type NavigationRoute<ParamsType = {}> = NavigationScreenProp<ScreenNavigationRoute<ParamsType>>

export type ScreenNavigationProps<ParamsType = {}> = {
  navigation: NavigationRoute<ParamsType>
}