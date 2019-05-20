// @flow

import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { type NavigationTabScreenOptions } from 'react-navigation'
import { connect } from 'react-redux'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import csstyles from '../../csstyles'
import { HomeInfoView } from '../../types'
import { ReduxState } from '../../reducers/types.reducer'
import homeActions from '../../actions/home.actions'

type Props = {
  homeInfo: HomeInfoView
}

class Report extends Component<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'REPORT',
    tabBarIcon: options => <TabBarIcon icon="chart-bar" tintColor={options.tintColor} />
  })

  render() {
    return (
      <View
        style={{
          ...csstyles.base.full,
          backgroundColor: csstyles.vars.csBlack
        }}
      >
       
      </View>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { homeInfo, isLoading } = state.home
  return {
    homeInfo,
    isLoading
  }
}

export default connect(
  mapStateToProps
)(Report)
