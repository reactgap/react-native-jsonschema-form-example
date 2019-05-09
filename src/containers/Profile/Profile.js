// @flow

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BaseForm, { type BaseFormProps } from '../../components/BaseForm/BaseForm'
import { type NavigationTabScreenOptions } from 'react-navigation'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import CSBackButton from '../../components/Button/CSBackButton/CSBackButton'
import baseFormStyles from '../../components/BaseForm/baseFormStyles'
import { connect } from 'react-redux'
import csstyles from '../../csstyles'
import Form from 'react-native-jsonschema-form'
import ProfileSchema from './ProfileSchema'
import authActions from '../../actions/auth.actions'

type Props = {}

class Profile extends PureComponent<> {
  static navigationOptions = (): NavigationStackScreenOptions => ({
    header: null
  })
  
  onSubmit = ({ formData }) => {
    console.log('formData Profile', formData)
    authActions.loginWithPhoneNumber("", "")
  }

  render = () => {
    const schema = ProfileSchema.schema;
    const uiSchema = ProfileSchema.uiSchema;
    return (
      <View
        style={csstyles.screen.main}
      >
        <Form schema={schema}
            styles={[csstyles.base.form]}
            uiSchema={uiSchema}
            onChange={console.log("changed")}
            onSubmit={this.onSubmit}
            onError={console.log("errors")}
        />
        <CSBackButton wrapperStyle={csstyles.base.backBtn} />
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
export default connect(() => ({}))(Profile)
