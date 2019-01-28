// @flow

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { type NavigationTabScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import TabBarIcon from './TabBar/TabBarIcon';
import csstyles from '../csstyles';
import FlatListSchema from '../../FlatListSchema'
import Form from 'react-native-jsonschema-form';

type Props = {}

class Dashboard1 extends PureComponent<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'FORM_2',
    tabBarIcon: options => <TabBarIcon icon="window-maximize" tintColor={options.tintColor} />
  })

  render() {
    const schema = FlatListSchema.schema
    const uiSchema = FlatListSchema.uiSchema
    return (
      <View
        style={{
          ...csstyles.base.full,
          backgroundColor: csstyles.vars.csWhite
        }}
      >
       <Form schema={schema}
          styles={csstyles.base.form}
          uiSchema={uiSchema}
          onChange={console.log("changed")}
          onSubmit={console.log("submitted")}
          onError={console.log("errors")}
        />
      </View>
    )
  }
}

export default connect(() => ({}))(Dashboard1)
