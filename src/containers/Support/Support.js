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
  homeInfo: HomeInfo
}

class Support extends Component<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'Support',
    tabBarIcon: options => <TabBarIcon icon="bullhorn" tintColor={options.tintColor} />
  })

  render() {
    const { home, isLoading } = this.props
    const { wallet, products } = home || {}
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
)(Support)
