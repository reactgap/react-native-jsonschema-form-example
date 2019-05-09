import { currLanguage } from './i18n'
import { Platform } from 'react-native'

if(Platform.OS === 'android') { // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/en-IN'); // load the required locale details
}

const regionLanguage = (language: string) => {
  if (language == null) return 'vi-VN'
  switch(language) {
    case 'en':
    return 'en-US'
      break;
    case 'vi':
    return 'vi-VN'
      break;
    default:
      return 'vi-VN'
  } 
}

const toLocaleString = (value?: number) => {
  if (value == null) return 'INVALID'
  let langSetting = currLanguage()
  let format = regionLanguage(langSetting)
  const nf = new Intl.NumberFormat(format, { style: 'currency', currency: 'VND' })
  return nf.format(value)
}

export default {
  toLocaleString
}