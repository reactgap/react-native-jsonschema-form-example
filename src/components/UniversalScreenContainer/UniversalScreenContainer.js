// @flow

import React from 'react'
import { View, StyleSheet, type ViewStype } from 'react-native'
import { IS_DEVICE_VERY_LONG_WIDTH, DEVICE_SCREEN_WIDTH } from '../../utils/deviceHelper'
import csstyles from '../../csstyles'

const styles = StyleSheet.create({
  view: {
    marginHorizontal: (DEVICE_SCREEN_WIDTH - csstyles.vars.widthForContainerOnLargeScreen) / 2,
    position: 'relative'
  }
})

type Props = { children: any, isFull?: boolean, wrapperStyle?: ViewStype }

const UniversalScreenContainer = ({ children, isFull, wrapperStyle }: Props) => {
  if (!IS_DEVICE_VERY_LONG_WIDTH) return <>{children}</>

  return <View style={[styles.view, isFull && csstyles.base.full, wrapperStyle]}>{children}</View>
}

export default UniversalScreenContainer
