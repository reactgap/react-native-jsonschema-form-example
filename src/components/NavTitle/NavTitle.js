// @flow
// @format

import React, { PureComponent } from 'react'
import { StyleSheet, Text, type TextStyle, View, Image } from 'react-native'
import csstyles from '../../csstyles'
import { IS_DEVICE_VERY_SHORT_WIDTH } from '../../utils/deviceHelper'

type Props = {
  title?: string,
  hasLogo?: Boolean,
  style?: TextStyle,
  numberOfLines?: number
}

class NavTitle extends PureComponent<Props> {
  render() {
    const { titleCode, t, style, title, numberOfLines, hasLogo } = this.props

    return (
      <View style={styles.container}>
        {
          hasLogo && <Image
          source={{
            uri: 'logo_header'
          }}
          resizeMode={'contain'}
          style={styles.logo}
          />
        }
        <Text style={[styles.title, style]} numberOfLines={numberOfLines}>
          {titleCode ? titleCode : title}
        </Text>
      </View>
    )
  }
}

const navTitleLeftPadding = IS_DEVICE_VERY_SHORT_WIDTH
  ? csstyles.vars.csBoxSpacing
  : csstyles.vars.csBoxSpacing2x

const styles = StyleSheet.create({
  container:{
    flex: 1,
    ...csstyles.base.rowCenter
  },
  logo: {
    width: 62,
    height: 18,
  },
  title: {
    ...csstyles.text.bold,
    ...csstyles.text.textWhite,
    fontSize: 20,
    paddingLeft: navTitleLeftPadding
  }
})

export default NavTitle
