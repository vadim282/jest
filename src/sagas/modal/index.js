import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { setUser } from '../../store/users/actions';
import { postUser } from '../../api';

function* addUserWorker(payload) {
  const {
    firstName, lastName, age, visits, progress, status,
  } = payload.payload;

  const user = yield call(postUser, {
    firstName,
    lastName,
    age,
    visits,
    progress,
    status,
  });
  yield put(setUser(user));
}

function* addUserWatcher() {
  yield takeEvery('CREATE_NEW_USER', addUserWorker);
}

export default function* userAddSaga() {
  yield fork(addUserWatcher);
}
