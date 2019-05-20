// @flow

import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView, RefreshControl, StyleSheet } from 'react-native'
import { type NavigationTabScreenOptions } from 'react-navigation'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import csstyles from '../../csstyles'
import authActions from '../../actions/auth.actions'
import Products from '../../components/Products/Products'
import WalletInfo from '../../components/Wallet/WalletInfo'
import { HomeInfo, Product } from '../../types'
import { HomeInfoView } from '../../reducers/types.reducer'
import { ReduxState } from '../../reducers/types.reducer'
import homeActions from '../../actions/home.actions'

type Props = I18NComponent & {
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

  renderProducts = (products: Product[], hasCode: Boolean) => {
    if (products && products.length > 0) {
      const { t } = this.props
      return (
        <>
          <View style={styles.heading}>
            <Text style={styles.headingTitle}>{hasCode ? t('HOME_PRODUCTS_SELL'): t('HOME_PRODUCTS_SUGGESTION')}</Text>
          </View>
          <Products products={products} navigation={this.props.navigation} onPress={this.onPress}/>
        </>
      )
    } else {
      if (hasCode) {
        return (
          <View style={{ flex: 1 }}>
          
          </View>
        )
      } else {
        return null
      }
    }
  }

  render() {
    const { homeInfo, isLoading, t } = this.props
    const { wallet, productsNoCode, productsHasCode } = homeInfo || {}
    console.log('props Home',this.props)
    console.log('key lanague', t('HOME_COMMISSION_TEMP'))
    return (
      <View
        style={{
          ...csstyles.base.full,
          backgroundColor: csstyles.vars.csContainer
        }}
      >
        {!isLoading && homeInfo != null  ?
          <>
             <ScrollView
          style={csstyles.base.full}
          stickyHeaderIndices={[]}
          refreshControl={(
            <RefreshControl
              size={20}
              tintColor={csstyles.vars.csGreen}
              // refreshing={isRefreshing}
              onRefresh={this.onRefresh}
            />
          )}
        >
          <WalletInfo wallet={wallet} t={t} />
          {this.renderProducts(productsHasCode, true)}
          {this.renderProducts(productsNoCode, false)}
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
    marginLeft: 30,
    // backgroundColor: csstyles.mixin.csBlackOpacity(0.8),
    justifyContent: 'center',
    // alignItems: 'center'
  },
  headingTitle: {
    ...csstyles.text.regular,
    ...csstyles.text.textMain,
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

export default withNamespaces()(connect(mapStateToProps)(Home))
