// @flow

import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, type ViewStyle } from 'react-native'
import csstyles from '../../csstyles'
import LinearGradient from 'react-native-linear-gradient'
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroup/Item/ListGroupItem';
import numberFormat from '../../utils/numberFormat'
import { Wallet } from '../../types'
type Props = {
  wallet: Wallet
}

type State = {
}

class WalletInfo extends PureComponent<Props, State> {
  static defaultProps = {
  }

  renderItem = (title: String, value: number, formatCurrency: Boolean) => {
    return(
      <View style={{flex: 1, height:44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={styles.text}>
            {title}
        </Text>
        <Text style={styles.value}>
            {formatCurrency ? numberFormat.toLocaleString(value): value }
        </Text>
    </View>
    )
  }

  render() {
    const {
      wallet
    } = this.props
    const { commisson, credit } = wallet
    const commissonValue = commisson.value || 0
    return (
      <View style={styles.container} >
      {this.renderItem('Commissions', commissonValue, true)}
      {this.renderItem('Credit', credit, false)}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: csstyles.vars.csBoxMargin,
    position: 'relative',
    borderRadius: 8,
    marginHorizontal: csstyles.vars.csBoxMargin,
    height: 88,
    backgroundColor: csstyles.vars.csGreyDark
  },
  text: {
    ...csstyles.text.medium,  
    fontSize: 16,
    marginLeft: csstyles.vars.csBoxMargin,
    flex: 1,
    color: csstyles.vars.csGreen
  },
  value: {
    ...csstyles.text.medium,
    fontSize: 16,
    flex: 1,
    marginRight: csstyles.vars.csBoxMargin,
    color: 'white',
    textAlign: 'right'
  }
})

export default WalletInfo
