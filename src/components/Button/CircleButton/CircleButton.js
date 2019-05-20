// @flow
// @format

import React from 'react'
import { TouchableOpacity, StyleSheet, type ViewStyle, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import csstyles from '../../../csstyles'

type Props = {
  wrapperStyle?: ViewStyle,
  icon: String,
  lighterBg?: boolean,
  onPress?: () => void,
  disabled?: boolean
}

const CSBackButton = (props: Props) => {
  const {wrapperStyle, onPress, icon, lighterBg, disabled } = props

  const iconName = icon != null && icon.length > 0 ? icon : 'chevron-right'

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress()}
      style={[styles.wrapper, wrapperStyle,  
        disabled
        ? {
          opacity: 0.6
          }
        : null
      ]}
      activeOpacity={0.6}
      disabled={disabled}
    >
      <FontAwesome
        name={iconName}
        style={[styles.icon]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: csstyles.vars.csInputHeight,
    width: csstyles.vars.csInputHeight,
    borderRadius: csstyles.vars.csInputBorderRaius,
    backgroundColor: csstyles.vars.csGreenLight,
    justifyContent: 'center',
    alignItems: 'center',
     // IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
     // Android
    elevation: 5,
  },
  wrapperLighterBg: {
    backgroundColor: csstyles.mixin.csGreyOpacity(0.8)
  },
  icon: {
    color: csstyles.vars.csWhite,
    fontSize: csstyles.vars.csInputHorizontalPadding,
    marginLeft: 1
  },
  iconClose: {
    marginLeft: 1
  }
})

export default CSBackButton
