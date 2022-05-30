import { defaultGet } from '../../helpers/ReducersHelper';
import { TasksListActions } from './ListTasksActions';

const initialState = {
  loading: false,
  payload: { tasks: [] },
  error: null,
};

export const getTasksListReducer = (state = initialState, action: any) => {
  return defaultGet(initialState, state, action, TasksListActions);
};
