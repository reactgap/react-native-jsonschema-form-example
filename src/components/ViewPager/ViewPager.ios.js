// @flow

import React, { Component } from 'react'
import { View, ScrollView, ViewStyle, NativeScrollEvent } from 'react-native'

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
    console.log('pages component',pages)
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

  onScroll = (event: { nativeEvent: NativeScrollEvent }) => {
    const { onPageChange } = this.props
    const { contentOffset, layoutMeasurement } = event.nativeEvent

    const index = parseInt(
      (contentOffset.x + layoutMeasurement.width / 2.0) / layoutMeasurement.width,
      0
    )

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
        <ScrollView
          style={{
            flex: 1
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScroll={this.onScroll}
          scrollEventThrottle={16}
          ref={(ref) => {
            this.scrollView = ref
          }}
        >
          {this.renderPages()}
        </ScrollView>
      </View>
    )
  }
}

export default ViewPager
