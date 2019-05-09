// @flow

import React, { PureComponent } from 'react'
import Crashes from 'appcenter-crashes'
import Hud from '../../components/Hud/Hud'
import { i18nTranslator } from '../../utils/i18n'

type State = {
  visible: boolean
}

class CrashConfirm extends PureComponent<{}, State> {
  state: State = {
    visible: false
  }

  async componentDidMount() {
    await Crashes.setListener({
      shouldAwaitUserConfirmation: () => {
        this.setState({
          visible: true
        })

        return true
      }
    })
  }

  onSelect = (choice: Crashes.UserConfirmation) => {
    Crashes.notifyUserConfirmation(choice)

    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state

    const actionsBtns = [
      {
        title: i18nTranslator('CRASH_BTN_SEND'),
        onPress: () => this.onSelect(Crashes.UserConfirmation.SEND),
        key: 'send',
        type: 'primary'
      },
      {
        title: i18nTranslator('CRASH_BTN_DONT_SEND'),
        onPress: () => this.onSelect(Crashes.UserConfirmation.DONT_SEND),
        key: 'dont_send',
        type: 'danger'
      }
    ]

    return (
      <Hud
        isOpen={visible}
        type="actions"
        actionsTitle={i18nTranslator('CRASH_TITLE')}
        actionsDesc={i18nTranslator('CRASH_DESC')}
        actionsBtns={actionsBtns}
      />
    )
  }
}

export default CrashConfirm
