// vendor
import { all, takeLatest } from 'redux-saga/effects';

// locals
import { Types as UserTypes } from '../ducks/users';
import { addUser } from './users';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.ADD_USER_REQUEST, addUser),
  ]);
}
