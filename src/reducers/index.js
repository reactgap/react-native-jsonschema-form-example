// @flow
import { combineReducers } from 'redux'
import reducer from './nav.reducer'
import homeReducer from './home.reducer'
import applicationReducer from './application.reducer'

export default combineReducers({
  nav: reducer,
  home: homeReducer,
  application: applicationReducer
})
