import { select, take, put, call, spawn } from 'redux-saga/effects';

import { getSpec } from './api';
import * as constants from './constants';

function* fetchProductInformation() {
  const state = yield select();
  const { url1, url2 } = state;
  const productSpecs = yield call(getSpec, url1, url2);

  yield put({
    type: constants.PRODUCT_SPEC_UPDATE,
    data: productSpecs
  });
}

function* saga() {
  while(true) {
    yield take(constants.PRODUCT_SPEC_FETCH);
    yield spawn(fetchProductInformation);
  }
}

export default saga;
