import { put, takeEvery } from 'redux-saga/effects';

// Actions
import { SELECT_SQUARE, COMPUTER_CALL } from './actions';

function* computerCall(action) {
  yield put({ type: COMPUTER_CALL });
}

function* mySaga() {
  yield takeEvery(SELECT_SQUARE, computerCall);
}

export default mySaga;