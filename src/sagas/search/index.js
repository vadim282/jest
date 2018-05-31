import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { getUsersByFilter } from '../../api'
import {setUsers} from "../../store/users/actions";

export default function * filterUserSaga() {
  yield fork(filterUserWatcher)
}

function * filterUserWatcher() {
  yield takeEvery('SEARCH_USER', filterUserWorker)
}

function * filterUserWorker(query) {
  const users = yield call(getUsersByFilter, query);
  yield put(setUsers(users))
}
