export const TasksListActions = {
  GET: 'GET_TASKS_LIST',
  GET_LOADING: 'GET_TASKS_LIST_LOADING',
  GET_SUCCESS: 'GET_TASKS_LIST_SUCCESS',
  GET_ERROR: 'GET_TASKS_LIST_ERROR',
};

const get = () => ({ type: TasksListActions.GET, });
const getLoading = () => ({ type: TasksListActions.GET_LOADING });
const getSuccess = (payload: any) => ({ type: TasksListActions.GET_SUCCESS, payload });
const getError = (error: any) => ({ type: TasksListActions.GET_ERROR, error });

export default {
  get, getLoading, getSuccess, getError
}