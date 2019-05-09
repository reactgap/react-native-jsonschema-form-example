// @flow
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, createMigrate } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas"
// import thunk from 'redux-thunk'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import reducers from './reducers'


const migrations = {
  0: state => ({
    ...state
  })
}

const persistConfig = {
  version: 0,
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: [],
  migrate: createMigrate(migrations, {
    debug: true
  })
}

const persistedReducer = persistReducer(persistConfig, reducers)

const nav = createReactNavigationReduxMiddleware('root', state => state.nav)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, compose(applyMiddleware(nav,sagaMiddleware)))
const persistor = persistStore(store, {}, () => {})
sagaMiddleware.run(rootSaga);
// export const getState: () => ReduxState = () => store.getState()

export const getDispatch = () => store.dispatch

export const getStore = () => store

export default {
  store,
  persistor
}
