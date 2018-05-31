import { fork } from 'redux-saga/effects'
import userListSaga from './sagas-list'
import userAddSaga from './modal'
import filterUserSaga from "./search";
import {aboutUserSaga} from "./about-user";



export default function* rootSaga() {
  yield fork(userListSaga);
  yield fork(userAddSaga);
  yield fork(filterUserSaga);
  yield fork(aboutUserSaga);
}
