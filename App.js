/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Form from 'react-native-jsonschema-form';
import Simple from "./simple";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Require cycle:']);

type Props = {};
export default class App extends Component<Props> {
  render() {
    const schema = Simple.schema;
    const uiSchema = Simple.uiSchema;
    return (
      <View style={styles.container}>
        <Form schema={schema}
          styles={styles.form}
          uiSchema={uiSchema}
          onChange={console.log("changed")}
          onSubmit={console.log("submitted")}
          onError={console.log("errors")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  form: {
    marginTop: 60,
    marginHorizontal: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
