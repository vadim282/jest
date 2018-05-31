import {fork, takeEvery, call, put} from 'redux-saga/effects';
import {setAboutUserId, editUser, deleteUserById} from '../../store/about-user/actions';
import {getUsersById, updateUser, deleteUser} from '../../api';

export function* aboutUserSaga() {
  yield fork(getInfoAboutUserWatcher);
  yield fork(editUserWatcher);
  yield fork(deleteUserWatcher);
}

function* getInfoAboutUserWatcher() {
  yield takeEvery('GET_ABOUT_USER', getInfoAboutUserWorker);
}

function* getInfoAboutUserWorker({payload: id}) {
  try {
    const user = yield call(getUsersById, id);
    yield put(setAboutUserId(user));
  }

  catch (e) {
    console.error(`e.name - name, e.message. Saga - getUserInfoByIdWorker`)
  }
}

function* editUserWatcher() {
  yield takeEvery('HANDLE_EDIT', editUserWorker);
}

function* editUserWorker({payload}) {
  try {
    yield call(updateUser, payload);
    yield put(editUser(payload));
  }

  catch (e) {
    console.error(`e.name - name, e.message. Saga - updateUserInfoWorker`)
  }
}

function* deleteUserWatcher() {
  yield takeEvery('HANDLE_DELETE', deleteUserWorker);
}

function* deleteUserWorker({payload: id}) {
  try {
    yield call(deleteUser, id);
    yield put(deleteUserById(id));
  }

  catch (e) {
    console.error(`e.name - name, e.message. Saga - deleteUserWorker`)
  }
}
