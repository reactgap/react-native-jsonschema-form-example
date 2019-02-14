// @flow

import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import { type NavigationTabScreenOptions } from 'react-navigation';
import CSBackButton from './Button/CSBackButton/CSBackButton'
import { connect } from 'react-redux';
import TabBarIcon from './TabBar/TabBarIcon';
import csstyles from '../csstyles';

import { DEVICE_SCREEN_WIDTH,
  DEVICE_TOP_SAFE,
  DEVICE_BOTTOM_SAFE,
  IS_DEVICE_VERY_LONG_WIDTH,
  DEVICE_SCREEN_HEIGHT } from '../utils/deviceHelper'
type Props = {}

const WIDTH = IS_DEVICE_VERY_LONG_WIDTH
  ? csstyles.vars.widthForContainerOnLargeScreen
  : DEVICE_SCREEN_WIDTH

class Screen1 extends PureComponent<Props> {

  renderScrollContent = () => {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContainer
        ]}
        stickyHeaderIndices={Platform.OS === 'android' ? [0] : null}
        showsVerticalScrollIndicator={false}
        ref={ref => (this.scrollView = ref)}
      >
      </ScrollView>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderScrollContent()}
        <CSBackButton
            wrapperStyle={styles.backBtn}
            forceCloseIcon={IS_DEVICE_VERY_LONG_WIDTH}
            lighterBg={IS_DEVICE_VERY_LONG_WIDTH}
            onPress={null}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      ...csstyles.base.full,
      position: 'relative'
    },
  scrollContainer: {
    paddingHorizontal: IS_DEVICE_VERY_LONG_WIDTH ? PADDING_FOR_VERY_LONG_WIDTH_SCREEN : 0,
    paddingBottom: DEVICE_BOTTOM_SAFE,
    paddingTop: WIDTH / 2
  },
  scroll: {
    ...csstyles.base.full,
    position: 'relative',
    backgroundColor: csstyles.mixin.csBlackOpacity(IS_DEVICE_VERY_LONG_WIDTH ? 0.8 : 0.2)
  },
  backBtn: {
    position: 'absolute',
    top: csstyles.vars.csBoxSpacing2x + DEVICE_TOP_SAFE,
    left: csstyles.vars.csBoxSpacing2x
  },
})
export default connect(() => ({}))(Screen1)
