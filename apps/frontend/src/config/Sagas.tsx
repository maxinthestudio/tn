import { all, fork } from 'redux-saga/effects';
import { watchGenerateTasks } from '../components/generate/GenerateTasksSagas';
import { watchGetTasksList } from '../components/list/ListTaskSagas';

export const rootSagas = function* rootSaga() {
  yield all([
    fork(watchGetTasksList),
    fork(watchGenerateTasks),
  ]);
}
