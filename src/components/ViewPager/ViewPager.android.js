// @flow

import React, { Component } from 'react'
import { View, ViewPagerAndroid, ViewStyle } from 'react-native'

type ViewPagerPage = {
  key: string,
  component: React.Component,
  props: { [x: string]: any },
  containerStyle: ViewStyle
}

type State = {}

type Props = {
  wrapperStyle: ViewStyle,
  pages: ViewPagerPage[],
  width: number,
  onPageChange?: (inex: number) => void
}
class ViewPager extends Component<Props, State> {
  state: State = {}

  renderPages = () => {
    const { pages, width } = this.props

    return pages.map(page => (
      <View
        key={page.key}
        style={[
          page.containerStyle,
          {
            flex: 1,
            width
          }
        ]}
      >
        <page.component {...page.props} />
      </View>
    ))
  }

  onPageSelected = (event) => {
    const { onPageChange } = this.props
    const index = event.nativeEvent.position

    onPageChange && onPageChange(index)
  }

  render() {
    const { wrapperStyle } = this.props

    return (
      <View
        style={[
          wrapperStyle,
          {
            position: 'relative'
          }
        ]}
      >
        <ViewPagerAndroid
          style={{
            flex: 1
          }}
          onPageSelected={this.onPageSelected}
          ref={(ref) => {
            this.viewPager = ref
          }}
        >
          {this.renderPages()}
        </ViewPagerAndroid>
      </View>
    )
  }
}

export default ViewPager
