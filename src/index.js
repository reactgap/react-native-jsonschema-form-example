import Walkthough from './containers/Walkthough/Walkthough'
import PhoneRegister from './containers/Auth/PhoneRegister/PhoneRegister'
import PhoneVerify from './containers/Auth/PhoneVerify/PhoneVerify'
import i18next, { i18nInit, currLanguage } from './utils/i18n'
import { I18nextProvider } from 'react-i18next'
import App from '../src/containers/App'

export { i18next, i18nInit, I18nextProvider, currLanguage }
export { Walkthough, PhoneRegister, PhoneVerify }
export { App }
