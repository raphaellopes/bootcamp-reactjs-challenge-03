// vendor
import { call, put } from 'redux-saga/effects';

// locals
import api from '../../services/api';
import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `users/${action.payload.username}`);

    const userData = {
      id: data.id,
      name: data.name,
      username: data.login,
      position: action.payload.position,
    };

    yield put(UserActions.addUserSuccess(userData));
  } catch (err) {
    yield put(UserActions.addUserError('Erro ao adicionar usuário!'));
  }
}
