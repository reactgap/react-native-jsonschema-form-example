// @flow

import React from 'react'
import { TouchableOpacity,
  Text,
  StyleSheet,
  View,
  type ViewStyle,
  type TextStyle } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import csstyles from '../../../csstyles'

type Props = {
  title?: string,
  type: 'primary' | 'main' | 'secondary' | 'danger' | 'border',
  onPress?: () => void,
  icon?: string,
  iconContainerStyle?: ViewStyle,
  style?: ViewStyle,
  disabled?: boolean
}

const size = 40
const FloatButton = ({
  title,
  type,
  onPress,
  style,
  disabled,
  icon
}: Props) => {
  const btnStyle = styles[type]
  const textStyle = styles[`text_${type}`]

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.touchableOpacityStyle,
        disabled
          ? {
            opacity: 0.6
          }
          : null
      ]}
      activeOpacity={0.6}
      disabled={disabled}
    >
       <View
          style={[
            btnStyle,
            styles.floatButton
          ]}
        >
          <FontAwesome5 name={icon} solid size={30} color={csstyles.vars.csWhite} />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacityStyle:{
    position: 'absolute',
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    right: csstyles.vars.csBoxMargin,
    bottom: csstyles.vars.csBoxMargin
  },
  floatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: size/2
  },
  primary: {
    backgroundColor: csstyles.vars.csGreen,
    borderWidth: 0
  },
  secondary: {
    backgroundColor: csstyles.vars.csBrown,
    borderWidth: 0
  },
  danger: {
    backgroundColor: csstyles.vars.csDanger,
    borderWidth: 0
  },
  main: {
    backgroundColor: csstyles.vars.csDollar,
    borderWidth: 0
  },
  text_primary: {
    color: csstyles.vars.csWhite
  },
  text_danger: {
    color: csstyles.vars.csWhite
  },
  text_secondary: {
    color: csstyles.vars.csWhite
  },
  text_main: {
    color: csstyles.vars.csWhite
  }
})

export default FloatButton
