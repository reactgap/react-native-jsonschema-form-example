// @flow

import React from 'react'
import { View, Text } from 'react-native'
import csstyles from '../../csstyles'

type Props = { children: any }
const ListGroup = ({ children }: Props) => (
  <View
    style={{
      ...csstyles.base.cardSecondary,
      padding: 0
    }}
  >
    {children}
  </View>
)

export default ListGroup
