// @flow

import { Platform, NativeModules } from 'react-native'

const supportedLanguages = ['en', 'de']

const getDeviceLanguage = () => {
  let languages = []

  if (Platform.OS === 'android' && NativeModules.I18nManager.localeIdentifier) {
    languages = [NativeModules.I18nManager.localeIdentifier.replace(/_/gi, '-')]
  } else if (Platform.OS === 'ios' && NativeModules.SettingsManager.settings.AppleLanguages) {
    languages = NativeModules.SettingsManager.settings.AppleLanguages
  }

  for (let i = 0; i < languages.length; i++) {
    const idx = supportedLanguages.findIndex(langCode => langCode === languages[i].split('-')[0])
    if (idx !== -1) {
      return supportedLanguages[idx]
    }
  }

  return supportedLanguages[0]
}

export default getDeviceLanguage
