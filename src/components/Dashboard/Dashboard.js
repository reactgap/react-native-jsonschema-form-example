// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { type NavigationTabScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import TabBarIcon from '../TabBar/TabBarIcon';
import csstyles from '../../csstyles';
import authActions from '../../actions/auth.actions'
// import Form from 'react-native-jsonschema-form';
// import Simple from '../../simple';
// import reducers from '../../reducers';
type Props = {}

class Dashboard extends Component<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'FORM_1',
    tabBarIcon: options => <TabBarIcon icon="window-maximize" tintColor={options.tintColor} />
  })

  render() {
    // const schema = Simple.schema;
    // const uiSchema = Simple.uiSchema;
    return (
      <View
        style={{
          ...csstyles.base.full,
          backgroundColor: csstyles.vars.csWhite
        }}
      >
        <Text>A</Text>
      </View>
    )
  }
}

export default Dashboard
