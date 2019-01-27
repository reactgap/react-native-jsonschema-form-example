// @flow

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { type NavigationTabScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import TabBarIcon from './TabBar/TabBarIcon';
import csstyles from '../csstyles';

type Props = {}

class Dashboard1 extends PureComponent<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'Simple Form',
    tabBarIcon: options => <TabBarIcon icon="window-maximize" tintColor={options.tintColor} />
  })

  render() {
    return (
      <View
        style={{
          ...csstyles.base.fullCenter,
          backgroundColor: csstyles.vars.csBlack
        }}
      >
        <Text
          style={{
            ...csstyles.text.bold,
            ...csstyles.text.textPrimary,
            fontSize: 18,
            textAlign: 'center'
          }}
        >
          Dashboard Screen
        </Text>

        <Text
          style={{
            ...csstyles.text.medium,
            ...csstyles.text.textWhite,
            fontSize: 15,
            textAlign: 'center'
          }}
        >
          Comming Soon...
        </Text>
      </View>
    )
  }
}

export default connect(() => ({}))(Dashboard1)
