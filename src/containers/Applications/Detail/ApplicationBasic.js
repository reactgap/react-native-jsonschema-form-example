// @flow

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { type NavigationTabScreenOptions } from 'react-navigation'
import TabBarIcon from '../../../components/TabBar/TabBarIcon'
import CSBackButton from '../../../components/Button/CSBackButton/CSBackButton'
import { connect } from 'react-redux'
import csstyles from '../../../csstyles'
import Form from 'react-native-jsonschema-form'
import ApplicationBasicSchema from './ApplicationBasicSchema'

type Props = {}

class ApplicationBasic extends PureComponent<> {
  
  onSubmit = ({ formData }) => {
    console.log('formData Profile', formData)
  }

  render = () => {
    const schema = ApplicationBasicSchema.schema;
    const uiSchema = ApplicationBasicSchema.uiSchema;
    return (
      <View
        style={csstyles.screen.container}
      >
        <Form schema={schema}
          styles={[csstyles.base.form]}
          uiSchema={uiSchema}
          onChange={console.log("changed")}
          onSubmit={this.onSubmit}
          onError={console.log("errors")}
        />
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    ...csstyles.base.full,
    position: 'relative'
  }
})
export default ApplicationBasic
