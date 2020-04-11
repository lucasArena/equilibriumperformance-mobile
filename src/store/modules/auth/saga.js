import { all, put, takeLatest, call } from 'redux-saga/effects';

import * as Actions from './actions';

import api from '~/services/api';

function* signInRequest({ payload }) {
  const { email, password } = payload;
  const { user, token } = yield call(api.post, `/sessions`, {
    email,
    password,
  });

  yield put(Actions.signInSuccess(user, token));
}

function setToken({ payload }) {
  if (!payload) return;
  api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signInRequest),
  takeLatest('persist/REHYDRATE', setToken),
]);
