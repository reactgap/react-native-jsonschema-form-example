// @flow
// @format

import React, { PureComponent } from 'react'
import { StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { type ReduxState, type ScreenNavigationProps } from '../../types'
import csstyles from '../../csstyles'
import { IS_DEVICE_VERY_SHORT_WIDTH } from '../../utils/deviceHelper'
import Photo from '../Photo/Photo'

type Props = ScreenNavigationProps<{}> & { photoURL: string }

class UserAvatar extends PureComponent<Props> {
  render() {
    const { photoURL, navigation } = this.props

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('User')
        }}
      >
        <Photo
          url={photoURL}
          wrapStyle={styles.photo}
          photoStyle={csstyles.base.full}
          profilePlaceHolder
        />
      </TouchableOpacity>
    )
  }
}

const navUserAvatarSize = Platform.select({
  ios: 30,
  android: 40
})

const navUserAvatarRightPadding = IS_DEVICE_VERY_SHORT_WIDTH
  ? csstyles.vars.csBoxSpacing
  : csstyles.vars.csBoxSpacing2x

const styles = StyleSheet.create({
  photo: {
    width: navUserAvatarSize,
    height: navUserAvatarSize,
    borderRadius: navUserAvatarSize / 2,
    marginLeft: navUserAvatarRightPadding
  }
})

const mapStateToProps = (state: ReduxState) => ({
  photoURL: null
})

export default withNavigation(connect(mapStateToProps)(UserAvatar))
