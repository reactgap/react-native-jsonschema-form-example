// @flow

import React, { PureComponent } from 'react'
import { Modal, ActivityIndicator, View, Text, Platform, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import csstyles from '../../csstyles'
import { DEVICE_SCREEN_WIDTH } from '../../utils/deviceHelper'
import CSButton from '../Button/CSButton/CSButton'

type Props = {
  children?: any
} & HudConfig

export type HudConfig = {
  type?: 'loading' | 'alert' | 'toast' | 'actions' | null,
  alertType?: 'error' | 'success' | null,
  alertTitle?: string | null,
  alertDesc?: string | null,
  alertBtnTitle?: string | null,
  alertBtnOnPress?: () => void,
  actionsTitle?: string | null,
  actionsDesc?: string | null,
  actionsBtns?: HudConfigAction[] | null,
  toastMsg?: string | null,
  isOpen: boolean
}

export type HudConfigAction = {
  key: string,
  title: string,
  icon?: string,
  type: 'primary' | 'secondary' | 'danger',
  onPress?: () => void
}

class Hud extends PureComponent<Props> {
  renderBody = () => {
    const {
      type,
      children,
      alertTitle,
      alertDesc,
      alertBtnTitle,
      alertBtnOnPress,
      alertType,
      actionsTitle,
      actionsDesc,
      actionsBtns,
      toastMsg
    } = this.props

    switch (type) {
    case 'toast': {
      return (
        <View style={styles.toastContainer}>
          <FontAwesome5 color={csstyles.vars.csGreen} name="check-circle" solid size={45} />
          <Text style={styles.toastText}>{toastMsg}</Text>
        </View>
      )
    }
    case 'loading': {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color={csstyles.vars.csOrange}
            style={styles.indicator}
          />
        </View>
      )
    }
    case 'alert': {
      return (
        <View style={styles.alertContainer}>
          <View style={styles.alertBody}>
            <Text
              style={[
                styles.alertTitle,
                {
                  color: alertType === 'error' ? csstyles.vars.csDanger : csstyles.vars.csGreen
                }
              ]}
            >
              {alertTitle}
            </Text>
            <Text style={styles.alertDesc}>{alertDesc}</Text>
          </View>
          <View style={styles.alertFooter}>
            <CSButton title={alertBtnTitle} type="primary" onPress={alertBtnOnPress} />
          </View>
        </View>
      )
    }
    case 'actions': {
      return (
        <View style={styles.alertContainer}>
          <View style={styles.alertBody}>
            <Text style={styles.actionsTitle}>{actionsTitle}</Text>
            {actionsDesc && <Text style={styles.alertDesc}>{actionsDesc}</Text>}
          </View>
          <View style={styles.actionsFooter}>
            {actionsBtns.map(({ title, key, onPress, icon, type: btnType }) => (
              <CSButton
                type={btnType}
                onPress={onPress}
                title={title}
                leftIcon={icon}
                key={key}
                style={styles.actionsBtn}
              />
            ))}
          </View>
        </View>
      )
    }
    default: {
      return children
    }
    }
  }

  onRequestClose = () => {}

  render() {
    const { isOpen, type } = this.props

    return (
      <Modal visible={isOpen} animationType="fade" transparent onRequestClose={this.onRequestClose}>
        {isOpen && (
          <View
            style={[
              styles.container,
              type === 'toast' && {
                backgroundColor: 'transparent'
              }
            ]}
          >
            {this.renderBody()}
          </View>
        )}
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...csstyles.base.fullCenter,
    backgroundColor: csstyles.mixin.csBlackOpacity(0.7)
  },
  toastContainer: {
    backgroundColor: csstyles.mixin.csBlackOpacity(0.8),
    minWidth: 70,
    minHeight: 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: csstyles.vars.csBoxSpacing
  },
  toastText: {
    ...csstyles.text.textPrimary,
    ...csstyles.text.medium,
    fontSize: 15,
    textAlign: 'center',
    marginTop: csstyles.vars.csBoxSpacing
  },
  loadingContainer: {
    borderColor: csstyles.vars.csOrange,
    borderWidth: csstyles.vars.csBoxBorderWidth,
    backgroundColor: csstyles.vars.csGrey,
    width: 70,
    height: 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    marginLeft: Platform.select({
      ios: 4,
      android: 0
    }),
    marginTop: Platform.select({
      ios: 1,
      android: 0
    })
  },
  alertContainer: {
    borderColor: csstyles.vars.csGreen,
    borderWidth: csstyles.vars.csBoxBorderWidth,
    backgroundColor: csstyles.vars.csGrey,
    borderRadius: csstyles.vars.csBoxBorderRadius,
    overflow: 'hidden',
    width: Math.min(DEVICE_SCREEN_WIDTH - csstyles.vars.csBoxSpacing * 8, 350)
  },
  alertFooter: {
    padding: csstyles.vars.csBoxSpacing
  },
  alertTitle: {
    ...csstyles.text.bold,
    fontSize: 17,
    alignItems: 'center',
    marginBottom: csstyles.vars.csBoxSpacing,
    textAlign: 'center'
  },
  alertDesc: {
    ...csstyles.text.medium,
    ...csstyles.text.textPrimary,
    fontSize: 15,
    alignItems: 'center',
    textAlign: 'center'
  },
  alertBody: {
    backgroundColor: csstyles.vars.csWhite,
    padding: csstyles.vars.csBoxSpacing
  },
  actionsFooter: {
    padding: csstyles.vars.csBoxSpacing,
    paddingBottom: 0
  },
  actionsTitle: {
    ...csstyles.text.bold,
    ...csstyles.text.textPrimary,
    fontSize: 17,
    alignItems: 'center',
    marginBottom: csstyles.vars.csBoxSpacing,
    textAlign: 'center'
  },
  actionsBtn: {
    marginBottom: csstyles.vars.csBoxSpacing
  }
})

export default Hud
