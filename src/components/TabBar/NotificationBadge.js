// @flow
// @format

import React, { PureComponent } from 'react'
import { StyleSheet, Platform, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { type ReduxState, type ScreenNavigationProps } from '../../types'
import csstyles from '../../csstyles'
import { IS_DEVICE_VERY_SHORT_WIDTH } from '../../utils/deviceHelper'

type Props = ScreenNavigationProps<{}> & { photoURL: string }

class NotificationBadge extends PureComponent<Props> {
  render() {
    const { photoURL, navigation } = this.props

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Notify')
        }}
      >
         <View style={[styles.wrapStyle, styles.notification]}>
            <FontAwesome5
              name="bell"
              style={[styles.placeholderText]}
              solid
            />
          </View>
      </TouchableOpacity>
    )
  }
}

const navNotificationSize = Platform.select({
  ios: 30,
  android: 40
})

const navUserAvatarRightPadding = IS_DEVICE_VERY_SHORT_WIDTH
  ? csstyles.vars.csBoxSpacing
  : csstyles.vars.csBoxSpacing2x

const styles = StyleSheet.create({
  wrapStyle: {
    position: 'relative',
    overflow: 'hidden',
  },
  notification: {
    width: navNotificationSize,
    height: navNotificationSize,
    borderRadius: navNotificationSize / 2,
    marginRight: navUserAvatarRightPadding,
    backgroundColor: csstyles.vars.csWhite,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: {
    ...csstyles.text.medium,
    fontSize: 13,
    color: csstyles.vars.csOrange,
    textAlign: 'center'
  }
})

const mapStateToProps = (state: ReduxState) => ({
  photoURL: null
})

export default withNavigation(connect(mapStateToProps)(NotificationBadge))
