// @flow

import i18next from 'i18next'
import { reactI18nextModule } from 'react-i18next/dist/es/context'
// import { type I18NKey } from '../types'
import appTextsEn from '../../assets/locales/app/en.json'
import getDeviceLanguage from './getDeviceLanguage'

const languageDetector = {
  type: 'languageDetector',
  async: false, // async detection
  detect: cb => cb(getDeviceLanguage()),
  init: () => {},
  cacheUserLanguage: () => {}
}

export const i18nInit = () => i18next
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en: {
        translation: appTextsEn
      }
    },
    fallbackLng: 'en',
    lng: getDeviceLanguage(),
    load: 'languageOnly',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export const i18nTranslator = (key: String, options?: { [id: string]: string | number }): string => i18next.t(key, options)
export const currLanguage = () => i18next.language.substr(0, 2)
export default i18next
