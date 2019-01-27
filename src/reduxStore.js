// @flow
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
// import { persistStore, persistReducer, createMigrate } from 'redux-persist'
// import thunk from 'redux-thunk'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import reducers from './reducers'


// const persistedReducer = persistReducer(persistConfig, reducers)

const nav = createReactNavigationReduxMiddleware('root', state => state.nav)

const store = createStore(reducers, compose(applyMiddleware(nav)))
// const persistor = persistStore(store, {}, () => {})

// export const getState: () => ReduxState = () => store.getState()

// export const getDispatch: () => Dispatch = () => store.dispatch

export const getStore = () => store

export default {
  store
}
