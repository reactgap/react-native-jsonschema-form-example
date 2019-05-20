// @flow
// @format

import React from 'react'
import { TouchableOpacity, StyleSheet, type ViewStyle, Platform } from 'react-native'
import { withNavigation, NavigationActions } from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { type ScreenNavigationProps } from '../../../types'
import csstyles from '../../../csstyles'

type Props = ScreenNavigationProps<{}> & {
  wrapperStyle?: ViewStyle,
  forceCloseIcon?: boolean,
  lighterBg?: boolean,
  onPress?: () => void
}

const CSBackButton = (props: Props) => {
  const { navigation, wrapperStyle, forceCloseIcon, lighterBg, onPress } = props

  const iconName = forceCloseIcon || Platform.OS === 'android' ? 'times' : 'chevron-left'

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => (onPress ? onPress() : navigation.dispatch(NavigationActions.back()))}
      style={[styles.wrapper, lighterBg ? styles.wrapperLighterBg : null, wrapperStyle]}
    >
      <FontAwesome
        name={iconName}
        style={[styles.icon, iconName === 'times' ? styles.iconClose : null]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: csstyles.vars.csInputHeight,
    width: csstyles.vars.csInputHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperLighterBg: {
    backgroundColor: csstyles.mixin.csGreyOpacity(0.8)
  },
  icon: {
    color: csstyles.vars.csWhite,
    fontSize: csstyles.vars.csInputHorizontalPadding,
    marginLeft: -3
  },
  iconClose: {
    color: csstyles.vars.csWhite,
    marginLeft: 1
  }
})

export default withNavigation(CSBackButton)
