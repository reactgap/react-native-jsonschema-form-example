// @flow

import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView, RefreshControl, StyleSheet } from 'react-native'
import { type NavigationTabScreenOptions } from 'react-navigation'
import { connect } from 'react-redux'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import csstyles from '../../csstyles'
import authActions from '../../actions/auth.actions'
import Products from '../../components/Products/Products'
import WalletInfo from '../../components/Wallet/WalletInfo'
import { HomeInfo, Product } from '../../types'
import { HomeInfoView } from '../../reducers/types.reducer'
import { ReduxState } from '../../reducers/types.reducer'
import homeActions from '../../actions/home.actions'

type Props = {
  homeInfo: HomeInfoView
}

class Home extends Component<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'Home',
    tabBarIcon: options => <TabBarIcon icon="home" tintColor={options.tintColor} />
  })

  componentDidMount() {
    homeActions.getHomeInfo()
  }

  onPress = (product: Product) => {
    console.log('Home onPress',product)
    homeActions.productSelected(product, product.id)
  }

  render() {
    const { homeInfo, isLoading } = this.props
    const { wallet, productsNoCode, productsHasCode } = homeInfo || {}
    console.log('props Home',this.props)
    return (
      <View
        style={{
          ...csstyles.base.full,
          backgroundColor: csstyles.vars.csBlack
        }}
      >
        {!isLoading && homeInfo != null  ?
          <>
             <ScrollView
          style={csstyles.base.full}
          stickyHeaderIndices={[1,3]}
          refreshControl={(
            <RefreshControl
              size={20}
              tintColor={csstyles.vars.csGreen}
              // refreshing={isRefreshing}
              onRefresh={this.onRefresh}
            />
          )}
        >
          <WalletInfo wallet={wallet} />
          <View style={styles.heading}>
            <Text style={styles.headingTitle}>{'Products have code'}</Text>
          </View>
          <Products products={productsHasCode} navigation={this.props.navigation} onPress={this.onPress}/>
          <View style={styles.heading}>
            <Text style={styles.headingTitle}>{'Product suggestions'}</Text>
          </View>
          <Products products={productsNoCode} navigation={this.props.navigation} onPress={this.onPress}/>
        </ScrollView>
          </>
          :
          <View
          style={[
            csstyles.base.fullCenter,
            {
              padding: csstyles.vars.csBoxSpacing2x
            }]}
          >
          <ActivityIndicator size="small" color={csstyles.vars.csGreen} />
        </View>

      }
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: csstyles.vars.csBoxSpacing2x,
    paddingVertical: csstyles.vars.csBoxSpacing,
    backgroundColor: csstyles.mixin.csBlackOpacity(0.8)
  },
  headingTitle: {
    ...csstyles.text.bold,
    ...csstyles.text.textPrimary,
    fontSize: 18
  }
})

const mapStateToProps = (state: ReduxState) => {
  const { homeInfo, isLoading } = state.home
  return {
    homeInfo,
    isLoading
  }
}

export default connect(
  mapStateToProps
)(Home)
