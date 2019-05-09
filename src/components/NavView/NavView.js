// @flow
// @format

import React, { PureComponent } from 'react'
import { StyleSheet, Text, type TextStyle } from 'react-native'
import NavTitle from '../NavTitle/NavTitle'
import { withNamespaces } from 'react-i18next'
import csstyles from '../../csstyles'
import { IS_DEVICE_VERY_SHORT_WIDTH } from '../../utils/deviceHelper'

type Props = {

}

class NavView extends PureComponent<Props> {
  render() {
    const titleCode = "product"
    return (
      <View style={csstyles.base.headerStyle}>
        <NavTitle titleCode={titleCode} />,
      </View>
    )
  }
}

export default NavTitle
