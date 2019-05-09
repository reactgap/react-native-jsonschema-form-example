// @flow
import { getDispatch } from '../reduxStore'

export const HOME_GET_INFO = 'HOME_GET_INFO'
export const HOME_GET_INFO_LOADING = 'HOME_GET_INFO_LOADING'
export const HOME_INFO_RESPONSE = 'HOME_INFO_RESPONSE'
export const PRODUCT_SELECTED = 'PRODUCT_SELECTED'

const getHomeInfoLoading = () => ({
  type: HOME_GET_INFO_LOADING,
  payload: {}
});

const homeInfoResponse = (data) => ({
  type: HOME_INFO_RESPONSE,
  payload: {
    home: data
  }
});

const getHomeInfo = () => (
  getDispatch()({
    type: 'HOME_GET_INFO',
    payload: {
      useraId: 'abcde'
    }
  })
)

const productSelected = (product, id) => (
  getDispatch()({
    type: PRODUCT_SELECTED,
    payload: {
      product,
      id
    }
  })
)

export default {
  getHomeInfo,
  getHomeInfoLoading,
  homeInfoResponse,
  productSelected
}