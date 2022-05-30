import { fork, take } from 'redux-saga/effects';
import { defaultPost } from '../../helpers/SagasHelper';
import Actions, { TaskGenerateActions } from './GenerateTasksActions';
import TasksGenerateApi from './GenerateTasksApi'

/* --------------------- Watchers ------------------ */

export const watchGenerateTasks = function* () {
  while (true) {
    const { params } = yield take(TaskGenerateActions.POST);
    yield fork(() => defaultPost(Actions, TasksGenerateApi, params));
  }
};