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
import ICSvg from '../../icons/ICSvg'

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
          <ICSvg
            name="border-circle"
            tintColor={csstyles.vars.csGreen}
            width={150}
            containerStyle={{ position: 'absolute', left: 5, right: 0, top: 0, bottom: 0}}
          />
          <View style={styles.iconView}>
            <FontAwesome5 name={icon} solid size={15} color={csstyles.vars.csWhite} />
          </View>
          <Text style={textStyle}>Tạo hồ sơ mới</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacityStyle:{
    position: 'absolute', 
    width: 140,
    height: size,
    right: 15,
    bottom: 20
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: csstyles.vars.csGreenLight,
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 2
  },
  floatButton: {
    ...csstyles.base.row,
    alignItems: 'center',
    // justifyContent: 'center',
    // width: 140,
    flex: 1,
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
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  text_primary: {
    color: csstyles.vars.csWhite,
    ...csstyles.text.regular
  },
  text_danger: {
    color: csstyles.vars.csWhite,
    ...csstyles.text.regular
  },
  text_secondary: {
    color: csstyles.vars.csWhite,
    ...csstyles.text.regular
  },
  text_main: {
    ...csstyles.text.textMain,
    ...csstyles.text.regular,
    marginLeft: 3
  }
})

export default FloatButton
