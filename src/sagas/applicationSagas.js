import { Platform } from 'react-native';
import {take, call, put, fork, race, takeEvery, takeLatest, select} from 'redux-saga/effects';
import applicationActions, { FILTER_APPLICATION } from '../actions/application.actions'
import list from '../fakeData/ApplicationList.json'

function* handleFilterApplication(action){
  yield put(applicationActions.filterApplicationLoading())
  yield delay(1000)
  yield put(applicationActions.filterApplicationResults(list))
  
}

export default function* rootSaga() {
    yield  takeLatest(FILTER_APPLICATION, handleFilterApplication)
}