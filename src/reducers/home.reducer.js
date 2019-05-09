// @flow
import { REHYDRATE } from 'redux-persist'
import { HomeInfo, Action, Product, HomeInfoView } from '../types'
import { HomeState } from './types.reducer'
import { 
    HOME_GET_INFO, 
    HOME_INFO_RESPONSE, 
    HOME_GET_INFO_LOADING,
    PRODUCT_SELECTED 
} from '../actions/home.actions'
import isEmpty from '../utils/validations/isEmpty'

const INIT_STATE: HomeState = {
    homeInfo: null,
    isLoading: false,
    product: null
};

const reducer = (state: HomeState = INIT_STATE, action: Action): HomeState => {
    console.log('action',action)
    switch (action.type) {
        case REHYDRATE: {
            return { ...INIT_STATE }
        }
        case HOME_GET_INFO_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case HOME_INFO_RESPONSE: {
            const { home } = action.payload || {}
            console.log('home',home)
            const { products } = home
            var productsHasCode = []
            var productsNoCode = []
            for (let product of products) {
                if (isEmpty(product.code)) {
                    productsNoCode.push(product)
                } else {
                    productsHasCode.push(product)
                }
            }
            console.log('HOME_INFO_RESPONSE')
            console.log('productsNoCode: ',productsHasCode)
            console.log('productsNoCode: ',productsNoCode)
            const homeInfoView: HomeInfoView = {
                wallet: home.wallet || {},
                productsHasCode,
                productsNoCode
            }

            return {
                ...state,
                homeInfo: homeInfoView,
                isLoading: false
            }
        }
        case PRODUCT_SELECTED: {
            const { product } = action.payload
            console.log('PRODUCT_SELECTED',product)
            return {
                ...state,
                product
            }
        }
        default:
            return state
    }
};

export default reducer
