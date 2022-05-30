import { fork, take } from 'redux-saga/effects';
import { defaultGet } from '../../helpers/SagasHelper';
import Actions, { TasksListActions } from './ListTasksActions';
import ListTasksApi from './ListTasksApi';

/* --------------------- Watchers ------------------ */
export const watchGetTasksList = function* () {
  while (true) {
    const { params } = yield take(TasksListActions.GET);
    yield fork(() => defaultGet(Actions, ListTasksApi, params));
  }
};
