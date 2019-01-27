// @flow

import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { BottomTabBar } from 'react-navigation-tabs'
import { IS_DEVICE_VERY_LONG_WIDTH,
  DEVICE_SCREEN_WIDTH,
  DEVICE_BOTTOM_SAFE } from '../../utils/deviceHelper'
import csstyles from '../../csstyles'

const styles = StyleSheet.create({
  view: {
    paddingBottom: Platform.isPad && Platform.OS === 'ios' ? DEVICE_BOTTOM_SAFE : 0,
    backgroundColor: csstyles.vars.csGrey,
    paddingHorizontal: IS_DEVICE_VERY_LONG_WIDTH
      ? (DEVICE_SCREEN_WIDTH - csstyles.vars.widthForContainerOnLargeScreen) / 2
      : 0
  }
})

const TabBar = (props: any) => (
  <View style={styles.view}>
    <BottomTabBar adaptive={false} {...props} />
  </View>
)

export default TabBar
