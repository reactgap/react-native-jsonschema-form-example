// @flow

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BaseForm, { type BaseFormProps } from '../../components/BaseForm/BaseForm'
import { type NavigationTabScreenOptions } from 'react-navigation'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import CSBackButton from '../../components/Button/CSBackButton/CSBackButton'
import CSButton from '../../components/Button/CSButton/CSButton'
import baseFormStyles from '../../components/BaseForm/baseFormStyles'
import { connect } from 'react-redux'
import csstyles from '../../csstyles'
import Crashes from 'appcenter-crashes';
import NavTitle from '../../components/NavTitle/NavTitle'

type Props = {}

class Profile extends PureComponent<> {
  static navigationOptions = (): NavigationStackScreenOptions => ({
    header: null
  })

  crashAction = () => {
    Crashes.generateTestCrash();
  }

  render = () => {
    return (
      <View
        style={csstyles.screen.main}
      > 
          <NavTitle title={'Notifications'} />
          
          <CSButton
            type="primary"
            title={'Crash Test'}
            onPress={this.crashAction}
            style={{
              marginTop: csstyles.vars.csBoxSpacing2x
            }}
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
