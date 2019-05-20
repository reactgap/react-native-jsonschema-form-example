// @flow
// @format

import React, { PureComponent } from 'react'
import { type ViewStyle, View, StyleSheet, Text, type TextStyle } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FastImage from 'react-native-fast-image'
import csstyles from '../../csstyles'

type Props = {
  url: string,
  photoStyle: ViewStyle,
  wrapStyle: ViewStyle,
  placeholderStyle?: ViewStyle,
  placeholderTextStyle?: TextStyle,
  bottomIconName?: string,
  profilePlaceHolder?: boolean,
  resizeMode?: String
}

type State = {
  loadState: 'progress' | 'success' | 'error'
}

class Photo extends PureComponent<Props, State> {
  state: State = {
    loadState: 'progress'
  }

  onLoad = () => {
    this.setState({
      loadState: 'success'
    })
  }

  onError = () => {
    this.setState({
      loadState: 'error'
    })
  }

  render() {
    const {
      photoStyle,
      url,
      wrapStyle,
      bottomIconName,
      placeholderStyle,
      profilePlaceHolder,
      placeholderTextStyle,
      resizeMode
    } = this.props
    const { loadState } = this.state

    return (
      <View style={[styles.wrapStyle, wrapStyle]}>
        <FastImage
          source={{
            uri: url || ''
          }}
          style={[csstyles.base.full, photoStyle]}
          resizeMode={resizeMode ? resizeMode : 'stretch'}
          onLoad={this.onLoad}
          onError={this.onError}
        />

        {loadState !== 'success' && (
          <View style={[styles.placeholder, placeholderStyle]}>
            {profilePlaceHolder ? (
              <FontAwesome5
                name="user-circle"
                style={[styles.placeholderText, placeholderTextStyle]}
                size= {48}
                solid
              />
            ) : (
              <Text style={[styles.placeholderText, placeholderTextStyle]}>MOMI</Text>
            )}
          </View>
        )}

        {bottomIconName && (
          <View style={styles.bottomIconContainer}>
            <FontAwesome5 color={csstyles.vars.csGreen} name={bottomIconName} size={15} />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapStyle: {
    position: 'relative',
    overflow: 'hidden'
  },
  placeholder: {
    ...csstyles.base.absoluteFull,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: {
    ...csstyles.text.medium,
    color: csstyles.vars.csWhite,
    textAlign: 'center'
  },
  bottomIconContainer: {
    ...csstyles.base.center,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '25%',
    backgroundColor: csstyles.mixin.csBlackOpacity(0.8)
  }
})

export default Photo
