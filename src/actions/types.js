// @flow

import { type ClientUser,
  type Product,
  type Chainsure,
  type Damage,
  type CheckoutDetail,
  type UserStat,
  type UserAddition,
  type ResponseError } from '../types'

import { type ReduxState } from '../reducers/types'

type ReduxPersistRehydrate = {
  type: 'persist/REHYDRATE',
  payload: any
}

type AuthStateChanged = {
  type: 'AUTH_STATE_CHANGED',
  payload: { user: ClientUser | null, addition: UserAddition | null, giftCode?: string | null }
}

type AuthPrepareSignUpEmail = {
  type: 'AUTH_PREPARE_SIGNUP_EMAIL'
}

type AuthDoneSignUpEmail = {
  type: 'AUTH_DONE_SIGNUP_EMAIL'
}

type ProductsLoading = {
  type: 'PRODUCTS_LOADING',
  payload: { isRefreshing: boolean }
}

type ProductsLoaded = {
  type: 'PRODUCTS_LOADED',
  payload: { products: Product[], isRefreshing: boolean }
}

type ProductSelect = {
  type: 'PRODUCT_SELECT',
  payload: { product?: Product, productId?: string }
}

type ProductToggleBuy = {
  type: 'PRODUCT_TOGGLE_BUY',
  payload: { productId?: string, clearErrors?: boolean }
}

type ProductOrder = {
  type: 'PRODUCT_ORDER',
  payload: { productId: string }
}

type ProductCheckout = {
  type: 'PRODUCT_CHECKOUT',
  payload: { productId: string, checkoutDetail: CheckoutDetail }
}

type ProductBuyPaymentReceived = {
  type: 'PRODUCT_BUY_PAYMENT_RECEIVED',
  payload: { productId: string, paymentId?: string, chainsureId?: string }
}

type ProductCheckoutVerifying = {
  type: 'PRODUCT_CHECKOUT_VERIFYING',
  payload: { productId: string }
}
type ProductCheckoutSuccess = {
  type: 'PRODUCT_CHECKOUT_SUCCESS',
  payload: { productId: string }
}
type ProductCheckoutError = {
  type: 'PRODUCT_CHECKOUT_ERROR',
  payload: { productId: string }
}

type ChainsuresLoading = {
  type: 'CHAINSURES_LOADING',
  payload: { isRefreshing: boolean }
}

type ChainsuresLoaded = {
  type: 'CHAINSURES_LOADED',
  payload: { chainsures: Chainsure[], isRefreshing: boolean }
}

type ChainsureSelect = {
  type: 'CHAINSURE_SELECT',
  payload: { chainsure?: Chainsure, chainsureId?: string }
}

type ChainsureDetailLoaded = {
  type: 'CHAINSURE_DETAIL_LOADED',
  payload: { chainsure: Chainsure, chainsureId: string }
}
type ChainsureDetailError = {
  type: 'CHAINSURE_DETAIL_ERROR',
  payload: { error: ResponseError, chainsureId: string }
}

type ChainsureToggleMakingGift = {
  type: 'CHAINSURE_TOGGLE_MAKING_GIFT',
  payload: { chainsureId: string }
}

type ChainsureGettingGiftCode = {
  type: 'CHAINSURE_GETTING_GIFT_CODE',
  payload: { chainsureId: string }
}

type ChainsureGotGiftCode = {
  type: 'CHAINSURE_GOT_GIFT_CODE',
  payload: { chainsureId: string, giftCode: string }
}

type ChainsureGiftCodeError = {
  type: 'CHAINSURE_GIFT_CODE_ERROR',
  payload: { chainsureId: string, error: ResponseError }
}

type ChainsureToggleSendGift = {
  type: 'CHAINSURE_TOGGLE_SEND_GIFT',
  payload: { chainsureId?: string }
}

type ChainsureToggleRelease = {
  type: 'CHAINSURE_TOGGLE_RELEASE',
  payload: { chainsureId: string }
}

type ChainsureReleasing = {
  type: 'CHAINSURE_RELEASING'
}

type ChainsureReleaseError = {
  type: 'CHAINSURE_RELEASE_ERROR',
  payload: { error: ResponseError }
}

type ChainsureReleaseSuccess = {
  type: 'CHAINSURE_RELEASE_SUCCESS',
  payload: { chainsure: Chainsure }
}

type ChainsureToggleDamage = {
  type: 'CHAINSURE_TOGGLE_DAMAGE',
  payload: { chainsureId?: string, clearError?: boolean }
}

type ChainsureDamageReporting = {
  type: 'CHAINSURE_DAMAGE_REPORTING'
}

type ChainsureDamageReportSuccess = {
  type: 'CHAINSURE_DAMAGE_REPORT_SUCCESS',
  payload: { chainsureId?: string }
}

type ChainsureDamageReportError = {
  type: 'CHAINSURE_DAMAGE_REPORT_ERROR',
  payload: { error: ResponseError }
}

type ChainsureToggleBuy = {
  type: 'CHAINSURE_TOGGLE_BUY',
  payload: { chainsureId?: string, clearErrors?: boolean }
}

type ChainsureOrder = {
  type: 'CHAINSURE_ORDER',
  payload: { chainsureId: string }
}

type ChainsureCheckout = {
  type: 'CHAINSURE_CHECKOUT',
  payload: { chainsureId: string, checkoutDetail: CheckoutDetail }
}

type ChainsureBuyPaymentReceived = {
  type: 'CHAINSURE_BUY_PAYMENT_RECEIVED',
  payload: { paymentId?: string, chainsureId: string }
}

type ChainsureCheckoutVerifying = {
  type: 'CHAINSURE_CHECKOUT_VERIFYING',
  payload: { chainsureId: string }
}

type ChainsureCheckoutSuccess = {
  type: 'CHAINSURE_CHECKOUT_SUCCESS',
  payload: { chainsureId: string }
}

type ChainsureCheckoutError = {
  type: 'CHAINSURE_CHECKOUT_ERROR',
  payload: { chainsureId: string }
}

type DamagesLoading = {
  type: 'DAMAGES_LOADING',
  payload: { isRefreshing: boolean }
}

type DamagesLoaded = {
  type: 'DAMAGES_LOADED',
  payload: { damages: Damage[], isRefreshing: boolean }
}

type DamageSelect = {
  type: 'DAMAGE_SELECT',
  payload: { damage?: Damage, damageId?: string }
}

type DamageDetailLoaded = {
  type: 'DAMAGE_DETAIL_LOADED',
  payload: { damage: Damage, damageId: string }
}

type GiftReceived = {
  type: 'GIFT_RECEIVED',
  payload: { chainsureId: string, giftCode: string, isAuth: boolean }
}
type GiftDetailLoaded = {
  type: 'GIFT_DETAIL_LOADED',
  payload: { chainsure: Chainsure }
}
type GiftLoginAndAccept = {
  type: 'GIFT_LOGIN_ACCEPT'
}
type GiftAccept = {
  type: 'GIFT_ACCEPT'
}
type GiftSuccess = {
  type: 'GIFT_SUCCESS'
}
type GiftError = {
  type: 'GIFT_ERROR',
  payload: { error: ResponseError }
}
type GiftClose = {
  type: 'GIFT_CLOSE'
}

type DashboardStatsLoaded = {
  type: 'DASHBOARD_STATS_LOADED',
  payload: { stats: UserStat }
}
type DashboardProductsLoading = {
  type: 'DASHBOARD_PRODUCTS_LOADING',
  payload: { mode: 'top' | 'latest' }
}
type DashboardProductsLoaded = {
  type: 'DASHBOARD_PRODUCTS_LOADED',
  payload: { mode: 'top' | 'latest', products: Product[] }
}
type DashboardChainsuredLoaded = {
  type: 'DASHBOARD_CHAINSURES_LOADED',
  payload: { chainsures: Chainsure[] }
}
type DashboardChainsuredLoading = {
  type: 'DASHBOARD_CHAINSURES_LOADING'
}

export type Action =
  | ReduxPersistRehydrate
  | AuthStateChanged
  | AuthPrepareSignUpEmail
  | AuthDoneSignUpEmail
  | ProductsLoading
  | ProductsLoaded
  | ProductSelect
  | ProductToggleBuy
  | ProductOrder
  | ProductCheckout
  | ProductBuyPaymentReceived
  | ProductCheckoutVerifying
  | ProductCheckoutSuccess
  | ProductCheckoutError
  | ChainsuresLoading
  | ChainsuresLoaded
  | ChainsureSelect
  | ChainsureDetailLoaded
  | ChainsureDetailError
  | ChainsureToggleMakingGift
  | ChainsureGettingGiftCode
  | ChainsureGotGiftCode
  | ChainsureGiftCodeError
  | ChainsureToggleSendGift
  | ChainsureToggleRelease
  | ChainsureReleasing
  | ChainsureReleaseError
  | ChainsureReleaseSuccess
  | ChainsureToggleDamage
  | ChainsureDamageReporting
  | ChainsureDamageReportSuccess
  | ChainsureDamageReportError
  | ChainsureToggleBuy
  | ChainsureOrder
  | ChainsureCheckout
  | ChainsureBuyPaymentReceived
  | ChainsureCheckoutVerifying
  | ChainsureCheckoutSuccess
  | ChainsureCheckoutError
  | DamagesLoading
  | DamagesLoaded
  | DamageSelect
  | DamageDetailLoaded
  | GiftReceived
  | GiftDetailLoaded
  | GiftAccept
  | GiftSuccess
  | GiftError
  | GiftClose
  | GiftLoginAndAccept
  | DashboardStatsLoaded
  | DashboardProductsLoading
  | DashboardProductsLoaded
  | DashboardChainsuredLoaded
  | DashboardChainsuredLoading

export type Dispatch = (action: Action | PromiseAction | Array<Action>) => any
export type GetState = () => ReduxState
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>
