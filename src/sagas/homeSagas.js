import { Platform } from 'react-native';
import {take, call, put, fork, race, takeEvery, takeLatest, select} from 'redux-saga/effects';
import homeActions, { HOME_GET_INFO } from '../actions/home.actions'
import HomeInfo from '../fakeData/HomeInfo.json'

delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* handleGetHomeInfo(action){
  yield put(homeActions.getHomeInfoLoading())
  yield delay(100)
  yield put(homeActions.homeInfoResponse(HomeInfo))
  
}

export default function* rootSaga() {
    yield  takeLatest(HOME_GET_INFO, handleGetHomeInfo);
}