// @flow

import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import csstyles from '../../../csstyles'

type Props = {
  type: 'link' | 'download',
  icon?: 'arrow' | null,
  onPress: () => void,
  onLongPress?: () => void,
  title: string,
  lastItem?: boolean
}
const ListGroupItem = ({ title, type, onPress, lastItem, icon, onLongPress }: Props) => {
  let iconName = ''

  switch (icon) {
  case 'arrow':
    iconName = 'angle-right'
    break
  case 'download':
    iconName = 'download'
    break
  default:
    break
  }

  const leftPart = (
    <Text
      style={{
        ...csstyles.text.textPrimary,
        ...csstyles.text.medium,
        fontSize: 16,
        flex: 1
      }}
    >
      {title}
    </Text>
  )

  switch (type) {
  case 'link':
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={csstyles.vars.csBrown}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View
          style={{
            ...csstyles.base.rowCenterLine,
            height: csstyles.vars.csInputHeight,
            borderBottomColor: csstyles.vars.csGreen,
            borderBottomWidth: lastItem ? 0 : StyleSheet.hairlineWidth,
            paddingHorizontal: csstyles.vars.csBoxSpacing2x
          }}
        >
          {leftPart}
          <View>
            <FontAwesome5
              color={csstyles.vars.csGreen}
              size={20}
              name={iconName || 'angle-right'}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  case 'download': 
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={csstyles.vars.csBrown}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View
          style={{
            ...csstyles.base.rowCenterLine,
            height: csstyles.vars.csInputHeight,
            borderBottomColor: csstyles.vars.csGreen,
            borderBottomWidth: lastItem ? 0 : StyleSheet.hairlineWidth,
            paddingHorizontal: csstyles.vars.csBoxSpacing2x
          }}
        >
          <View style={{
            width: 40
          }}>
            <FontAwesome5
              color={csstyles.vars.csGreen}
              size={20}
              name={iconName || 'download'}
            />
          </View>
          {leftPart}
        </View>
      </TouchableHighlight>
    )
  default:
    return null
  }
}

export default ListGroupItem
