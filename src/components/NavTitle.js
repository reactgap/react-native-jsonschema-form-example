// @flow
// @format

import React, { PureComponent } from 'react'
import { StyleSheet, Text, type TextStyle } from 'react-native'
import csstyles from '../csstyles'
import { IS_DEVICE_VERY_SHORT_WIDTH } from '../utils/deviceHelper'

type Props = {
  title?: string,
  style?: TextStyle,
  numberOfLines?: number
}

class NavTitle extends PureComponent<Props> {
  render() {
    const { titleCode, t, style, title, numberOfLines } = this.props

    return (
      <Text style={[styles.title, style]} numberOfLines={numberOfLines}>
        {titleCode ? titleCode : title}
      </Text>
    )
  }
}

const navTitleLeftPadding = IS_DEVICE_VERY_SHORT_WIDTH
  ? csstyles.vars.csBoxSpacing
  : csstyles.vars.csBoxSpacing2x

const styles = StyleSheet.create({
  title: {
    ...csstyles.text.bold,
    ...csstyles.text.textPrimary,
    fontSize: 20,
    paddingLeft: navTitleLeftPadding
  }
})

export default NavTitle
