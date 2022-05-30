import { defaultPost } from '../../helpers/ReducersHelper';
import { TaskGenerateActions } from './GenerateTasksActions';

const initialPostState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

export const generateTasksReducer = (state = initialPostState, action: any) => {
  return defaultPost(initialPostState, state, action, TaskGenerateActions);
};
