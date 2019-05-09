import homeSagas from './homeSagas'
import applocationSagas from './applicationSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    homeSagas(),
    applocationSagas()
  ]);
} 
