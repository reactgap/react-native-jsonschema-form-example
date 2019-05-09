// @flow

import React, { PureComponent } from 'react'
import { View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
  Text,
  type ListRenderItem } from 'react-native'
import { type NavigationTabScreenOptions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import csstyles from '../../csstyles'
import { type ScreenNavigationProps, type I18NComponent } from '../../types'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../utils/deviceHelper'
import { i18nTranslator } from '../../utils/i18n'
import UniversalScreenContainer from '../../components/UniversalScreenContainer/UniversalScreenContainer'
import { Product } from '../../types';
import MenuItem from './MenuItem'

type Props = ScreenNavigationProps & I18NComponent & {
  products: Product[],
  onPress: (product: Product) => any
}

class Products extends PureComponent<Props> {
  onSelect = (product: Product) => {
    const { onPress } = this.props
    onPress(product)
  }

  renderItem: ListRenderItem<Product> = ({ item, index }) => (
    <MenuItem
      data={item} 
      index={index} 
      onPress={this.onSelect} 
      width={csstyles.vars.widthProduct}
      odd={index % 2 === 1}
    />
  )

  renderEmpty = () => {
    return (
      <View>
        <Text style={[{ color: 'white' }]}>a</Text>
      </View>
    )
  }

  render() {
    const { products } = this.props
    console.log('products', products)
    return (
      <View style={styles.screen}>
        <FlatList
          style={csstyles.base.full}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={this.renderEmpty}
          data={products}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
          renderItem={this.renderItem}
          windowSize={20}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csBlack
  },
  listContainer: {
    paddingBottom: csstyles.vars.csBoxSpacing2x
  },
  footer: {
    ...csstyles.base.rowCenter,
    height: 44
  }
})

export default Products
