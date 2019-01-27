// @flow

import React from 'react'
import { View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const TabBarIcon = (props: { icon: string, tintColor: string | null }) => {
  const { icon, tintColor, size } = props

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <FontAwesome5 name={icon} color={tintColor} size={22} />
    </View>
  )
}

export default TabBarIcon
