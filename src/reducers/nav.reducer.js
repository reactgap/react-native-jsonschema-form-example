// @flow
import { REHYDRATE } from 'redux-persist'
import { rootNavigator } from '../components/Root/Root'
import { NavigationActions } from 'react-navigation'
import {  APPLICATION_LIST_NAVIGATE } from '../actions/application.actions'
const initialState = rootNavigator.router.getStateForAction(
  rootNavigator.router.getActionForPathAndParams('Main')
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATE_CHANGED': {
      console.log('AUTH_STATE_CHANGED',action)
      return rootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Main'
        }),
        state
      )
    }

    case 'PRODUCT_SELECTED': {
      const { product, id } = action.payload
      return rootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Product',
          params: { 
            product,
            id
          }
        }),
        state
      )
    }

    case 'PRODUCT_SELECTED': {
      const { product, id } = action.payload
      return rootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Product',
          params: {
            product,
            id
          }
        }),
        state
      )
    }

    case 'APPLICATION_SELECTED': {
      const { application, id } = action.payload
      return rootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'ApplicationDetail',
          params: {
            application,
            id
          }
        }),
        state
      )
    }

    case APPLICATION_LIST_NAVIGATE: {
      const { data } = action.payload
      console.log('payload',action.payload)
      return rootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'ApplicationList',
          params: {
            data
          }
        }),
        state
      )
    }

    default:
      return rootNavigator.router.getStateForAction(action, state) || state
  }
}

export default reducer
