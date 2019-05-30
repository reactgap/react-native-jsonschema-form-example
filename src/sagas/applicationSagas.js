import { Platform } from 'react-native';
import {take, call, put, fork, race, takeEvery, takeLatest, select} from 'redux-saga/effects';
import applicationActions, { FILTER_APPLICATION, FILTER_APPLICATION_SUMMARY, APPLICATION_LIST_BY_TYPE } from '../actions/application.actions'
import list from '../fakeData/ApplicationList.json'
import summaryInfo from '../fakeData/ApplicationSummary.json'
function* handleFilterApplication(action){
  yield put(applicationActions.filterApplicationLoading())
  yield delay(2000)
  yield put(applicationActions.filterApplicationResults(list))
  
}

function* handleFilterApplicationSummary(action){
  yield put(applicationActions.filterApplicationSummaryLoading())
  yield delay(1)
  yield put(applicationActions.filterApplicationSummaryResults(summaryInfo))
}

function* handleApplicationListByType(action){
  yield put(applicationActions.filterApplicationSummaryLoading())
  yield delay(1)
  yield put(applicationActions.filterApplicationResults(list))
}

export default function* rootSaga() {
    yield  takeLatest(FILTER_APPLICATION, handleFilterApplication)
    yield  takeLatest(FILTER_APPLICATION_SUMMARY, handleFilterApplicationSummary)
    yield  takeLatest(APPLICATION_LIST_BY_TYPE, handleApplicationListByType)
}