// @flow
import { NavigationActions } from 'react-navigation'
import { rootNavigator } from '../components/Root'

const initialState = rootNavigator.router.getStateForAction(
  rootNavigator.router.getActionForPathAndParams('Main')
)

const reducer = (state: any = initialState, action) => {
  return rootNavigator.router.getStateForAction(action, state) || state
  // switch (action.type) {
  //   return state
  // }
  // default:
    
  // }
}

export default reducer
