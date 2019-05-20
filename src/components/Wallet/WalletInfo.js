// @flow

import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, type ViewStyle, Image } from 'react-native'
import csstyles from '../../csstyles'
import LinearGradient from 'react-native-linear-gradient'
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroup/Item/ListGroupItem';
import numberFormat from '../../utils/numberFormat'
import { Wallet } from '../../types'
import { DEVICE_SCREEN_WIDTH } from '../../utils/deviceHelper'
import UserAvatar from '../../components/TabBar/UserAvatar'

type Props = I18NComponent & {
  wallet: Wallet
}

type State = {
}

const heightContainer = (DEVICE_SCREEN_WIDTH - csstyles.vars.csBoxMargin * 2) / 4
class WalletInfo extends PureComponent<Props, State> {
  static defaultProps = {
  }

  render() {
    const { wallet, t } = this.props
    const { commisson, credit } = wallet
    const commissonValue = commisson.value || 0
    return (
      <LinearGradient colors={['#4C80CA', '#00C9BD']} start={{x: 0, y: 0.7}} end={{x: 1, y: 0.25}} locations={[0.0, 1.0]} style={styles.container}>
        <View style={ { width: 100, ...csstyles.base.center }}>
          <UserAvatar />
        </View>
        <View style={styles.infoView}>
            <Text style={styles.text}>
                {t('HOME_COMMISSION_TEMP').toUpperCase()}
            </Text>
            <Text style={styles.value}>
                  {numberFormat.toLocaleString(1000000)}
            </Text>
        </View>
      </LinearGradient>
    //   <View style={styles.container} >
        
    // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...csstyles.base.row,
    ...csstyles.base.shadow,
    position: 'relative',
    height: heightContainer,
    marginTop: csstyles.vars.csBoxMargin * 2,
    margin: csstyles.vars.csBoxMargin,
    borderRadius: 10
  },
  bgHeader: {
    top: 0,
    left: 0,
    right: 0,
    width: DEVICE_SCREEN_WIDTH,
    height: DEVICE_SCREEN_WIDTH/2.27
  },
  infoView: {
    ...csstyles.base.column,
    justifyContent: 'center'
  },
  text: {
    // marginTop: 20,
    ...csstyles.text.regular,  
    fontSize: 16,
    color: csstyles.vars.csWhite,
    alignItems: 'center',
    borderRadius: 5
  },
  value: {
    ...csstyles.text.medium,
    fontSize: 14,
    color: csstyles.vars.csGreen,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: csstyles.vars.csWhite,
    overflow: 'hidden',
    padding: 3,
    marginTop: 2
  }
})

export default WalletInfo
