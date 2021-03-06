// @flow

import { type NavigationScreenProp, type NavigationScreenOptions } from 'react-navigation'

type ScreenNavigationRoute<ParamsType = { [id: string]: * }> = {
  index: number,
  params: ParamsType,
  routes: ScreenNavigationRoute<any>[],
  routeName: string
}

export type NavigationRoute<ParamsType = {}> = NavigationScreenProp<ScreenNavigationRoute<ParamsType>>

export type ScreenNavigationProps<ParamsType = {}> = {
  navigation: NavigationRoute<ParamsType>
}

export type ProductReportTime = {
  id: number,
  name: string
}

export type Commisson = {
  value: number,
  currencyISO: string
}

export type Wallet = {
  commisson: Commisson,
  credit: number
}

export type HomeInfo = {
  wallet: Wallet,
  products: Product[]
};

export type HomeInfoView = {
  wallet: Wallet,
  productsHasCode: Product[],
  productsNoCode: Product[]
};

export type Product = {
  id: number,
  name: string,
  imageUrl: string,
  active: boolean,
  currencyISO: string,
  orgainization: string,
  informationURL: string,
  code: string
};

export type User = {
  firstName: string,
  lastName: string,
  nationalId: String,
  address: {
    district: string,
    province: string
  }
}

export type Application = {
  updatedDate: string,
  createDate: string,
  applicationId: string,
  product: Product,
  customer: User
}

export type SummaryInfo = {
  total: Number,
  from: Number,
  size: Number
}

// export type Summary = {
//   info: SummaryInfo,
//   pennding: Number,
//   progress: Number,
//   canceled: Number,
//   reject: Number,
//   success: Number
// }
export type SummaryItem = {
  type: Number,
  value: Number
}

export type Summary = {
  info: SummaryInfo,
  response: SummaryItem[]
}

type AlertShowAction = { type: 'ALERT_SHOW', payload: AlertConfig };
type AlertHideAction = { type: 'ALERT_HIDE' };

export type Action =  AlertShowAction

export type I18NKey =
  | 'CURRENCY_FORMAT'
  | 'DEFAULT_CURRENCY'
  | 'MENU_DASHBOARD'
  | 'MENU_OFFERS'
  | 'MENU_INVENTORIES'
  | 'MENU_PAYOUTS'
  | 'START_LOG_IN'
  | 'START_SIGN_UP'
  | 'ALERT_CONFIRM'
  | 'ALERT_SUCCESS'
  | 'ALERT_ERROR'
  | 'ALERT_CONTINUE'
  | 'ALERT_OK'
  | 'ALERT_CANCEL'
  | 'CRASH_TITLE'
  | 'CRASH_DESC'
  | 'CRASH_BTN_SEND'
  | 'CRASH_BTN_DONT_SEND'
  | 'USER_LOG_IN_TITLE'
  | 'USER_LOG_IN_DESC'
  | 'USER_LOG_IN_QUESTION'
  | 'USER_LOG_IN_ERR_INVALID'
  | 'USER_LOG_IN_ERR_UNKOWN'
  | 'USER_LOG_IN_BTN'
  | 'USER_SIGN_UP_TITLE'
  | 'USER_SIGN_UP_DESC'
  | 'USER_SIGN_UP_QUESTION'
  | 'USER_SIGN_UP_BTN'
  | 'USER_SIGN_UP_ERR_EMAIL_DUPLICATED'
  | 'USER_SIGN_UP_ERR_UNKOWN'
  | 'USER_EMAIL'
  | 'USER_EMAIL_REQUIRED'
  | 'USER_EMAIL_INVALID'
  | 'USER_DISPLAY_NAME'
  | 'USER_DISPLAY_NAME_REQUIRED'
  | 'USER_PASSWORD'
  | 'USER_PASSWORD_LENGTH'
  | 'USER_PASSWORD_REQUIRED'
  | 'USER_CONFIRM_PASSWORD'
  | 'USER_CONFIRM_PASSWORD_REQUIRED'
  | 'USER_CONFIRM_PASSWORD_NOT_MATCH'
  | 'USER_REMEMBER'
  | 'USER_FORGOT_PASSWORD'
  | 'USER_AUTH_SOCIAL'
  | 'USER_AUTH_SOCIAL_ERR_UNKNOWN'
  | 'USER_AUTH_SOCIAL_ERR_DUPLICATED_EMAIL'
  | 'USER_AUTH_SOCIAL_ERR_USER_DENIED'
  | 'USER_AUTH_OR'
  | 'USER_FORGOT_PASSWORD_TITLE'
  | 'USER_FORGOT_PASSWORD_DESC'
  | 'USER_FORGOT_PASSWORD_BTN'
  | 'USER_FORGOT_PASSWORD_SUCCESS'
  | 'USER_FORGOT_PASSWORD_ERR_UNKNOWN'
  | 'CHAINSURE_STATUS_PAID'
  | 'CHAINSURE_LAST_USE_ON'
  | 'CHAINSURE_USE_ON'
  | 'CHAINSURE_USING'
  | 'CHAINSURE_PAID_AT'
  | 'CHAINSURE_RELEASE_AT'
  | 'CHAINSURE_WANNA_EARLY_RELEASE'
  | 'CHAINSURE_WANNA_RELEASE'
  | 'CHAINSURE_WANNA_MAKEGIFT'
  | 'CHAINSURE_BUY_AGAIN'
  | 'CHAINSURE_ACTION_EARLY_RELEASE'
  | 'CHAINSURE_ACTION_RELEASE'
  | 'CHAINSURE_ACTION_MAKEGIFT'
  | 'PRODUCT_BUY_FOR'
  | 'PRODUCT_MODAL_BUY'
  | 'CHAINSURE_HISTORIES'
  | 'CHAINSURE_HISTORY_BUY'
  | 'CHAINSURE_HISTORY_RELEASE'
  | 'CHAINSURE_HISTORY_DAMAGE'
  | 'CHAINSURE_HISTORY_GIFT'
  | 'CHAINSURE_DAMAGE'
  | 'CHAINSURE_BUY_AGAIN_FOR'
  | 'CHAINSURE_MAKE_GIFT_TITLE'
  | 'CHAINSURE_MAKE_GIFT_DESC'
  | 'CHAINSURE_MAKE_GIFT_COPIED'
  | 'CHAINSURE_MAKE_GIFT_COPY'
  | 'CHAINSURE_MAKE_GIFT_SEND'
  | 'CHAINSURE_MAKE_GIFT_SHARE_ON'
  | 'CHAINSURE_MAKE_GIFT_ERROR'
  | 'CHAINSURE_SEND_GIFT_TITLE'
  | 'CHAINSURE_SEND_GIFT_DESC'
  | 'CHAINSURE_SEND_GIFT_SUBMIT'
  | 'CHAINSURE_SEND_GIFT_TEXT'
  | 'CHAINSURE_SEND_GIFT_ERR'
  | 'CHAINSURE_SEND_GIFT_ERR_USER'
  | 'CHAINSURE_SEND_GIFT_SUCCESS'
  | 'CHAINSURE_RELEASE_QUESTION'
  | 'CHAINSURE_RELEASE_GOOD'
  | 'CHAINSURE_RELEASE_BAD'
  | 'CHAINSURE_RELEASE_SUCCESS'
  | 'CHAINSURE_RELEASE_ERROR'
  | 'CHAINSURE_DAMAGE_SUCCESS'
  | 'CHAINSURE_DAMAGE_ERROR'
  | 'CHAINSURE_DAMAGE_TITLE'
  | 'CHAINSURE_DAMAGE_DESC'
  | 'CHAINSURE_DAMAGE_EMAIL'
  | 'CHAINSURE_DAMAGE_EMAIL_REQUIRED'
  | 'CHAINSURE_DAMAGE_EMAIL_INVALID'
  | 'CHAINSURE_DAMAGE_COMMENT'
  | 'CHAINSURE_DAMAGE_SUBMIT'
  | 'CHAINSURE_DAMAGE_PICTURES'
  | 'BUYING_FORM_START'
  | 'BUYING_FORM_END'
  | 'BUYING_FORM_INVALID'
  | 'PRODUCT_MODAL_BUY_TITLE'
  | 'PRODUCT_MODAL_BUY_DESC'
  | 'PRODUCT_MODAL_BUY_PRICE'
  | 'PRODUCT_MODAL_BUY_SUCCESS'
  | 'PRODUCT_MODAL_BUY_ERROR'
  | 'CHAINSURE_MODAL_BUY_TITLE'
  | 'CHAINSURE_MODAL_BUY_DESC'
  | 'CHAINSURE_MODAL_BUY_PRICE'
  | 'CHAINSURE_MODAL_BUY_SUCCESS'
  | 'CHAINSURE_MODAL_BUY_ERROR'
  | 'SETTINGS_ACCOUNT'
  | 'SETTINGS_PROFILE'
  | 'SETTINGS_PASSWORD'
  | 'SETTINGS_HELP'
  | 'SETTINGS_TERM'
  | 'SETTINGS_PRIVACY'
  | 'SETTINGS_ABOUT'
  | 'SETTINGS_LOG_OUT'
  | 'GIFT_DESCRIPTION'
  | 'GIFT_ACCEPT_SUCCESS'
  | 'GIFT_ACCEPT_ERROR'
  | 'GIFT_ACCEPT'
  | 'GIFT_ACCEPT_LOGIN'
  | 'LOG_OUT_CONFIRM'
  | 'USER_AUTH_PHONE_TITLE'
  | 'USER_AUTH_PHONE_DESC'
  | 'USER_AUTH_PHONE_NUMBER'
  | 'USER_AUTH_PHONE_NUMBER_REQUIRED'
  | 'USER_AUTH_PHONE_SUBMIT'
  | 'USER_AUTH_PHONE_DIAL_CODE_SELECT'
  | 'USER_AUTH_PHONE_ERR_NOT_SENT'
  | 'USER_AUTH_PHONE_VERIFY_TITLE'
  | 'USER_AUTH_PHONE_VERIFY_DESC'
  | 'USER_AUTH_PHONE_VERIFY_CODE'
  | 'USER_AUTH_PHONE_VERIFY_CODE_REQUIRED'
  | 'USER_AUTH_PHONE_VERIFY_SUBMIT'
  | 'USER_AUTH_PHONE_ERR_UNKNOWN'
  | 'USER_AUTH_PHONE_ERR_WRONG_CODE'
  | 'SETTINGS_PROFILE_PHOTO_SELECT'
  | 'SETTINGS_PROFILE_PHOTO_EDIT'
  | 'SETTINGS_PROFILE_PHOTO_DONE'
  | 'SETTINGS_PROFILE_PHOTO_CANCEL'
  | 'PHOTO_OPEN_MODE_CAMERA'
  | 'PHOTO_OPEN_MODE_LIBRARY'
  | 'DASHBOARD_STAT_PRODUCT_BUY'
  | 'DASHBOARD_STAT_PRODUCT_REBUY'
  | 'DASHBOARD_STAT_GIFT_SENT'
  | 'DASHBOARD_STAT_GIFT_RECEIVED'
  | 'DASHBOARD_STAT_MONEY_PAID'
  | 'DASHBOARD_STAT_MONEY_SPENT'
  | 'DASHBOARD_STAT_MONEY_POPUP_PAID'
  | 'DASHBOARD_STAT_MONEY_POPUP_SPENT'
  | 'DASHBOARD_STAT_MONEY_POPUP_OPTION'
  | 'DASHBOARD_PRODUCT_TOP_HEADING'
  | 'DASHBOARD_PRODUCT_LATEST_HEADING'
  | 'DASHBOARD_PRODUCT_TOP_LINK'
  | 'DASHBOARD_PRODUCT_LATEST_LINK'
  | 'DASHBOARD_PRODUCT_BUY_TIMES'
  | 'DASHBOARD_PRODUCT_BUY_AGAIN_TIMES'
  | 'DASHBOARD_INVENTORIES_HEADING'
  | 'DASHBOARD_INVENTORIES_NOT_FOUND'
  | 'VIEW_ALL'
  | 'INVENTORIES_EMPTY'
  | 'DAMAGES_EMPTY'
  | 'CHAINSURE_ACTION_ERROR_WRONG_PERMISSION'

export type I18NComponent = {
  t: (key: I18NKey, options?: { [id: string]: string | number }) => string,
  i18n: { changeLanguage: (lang: string) => void, language: string }
}