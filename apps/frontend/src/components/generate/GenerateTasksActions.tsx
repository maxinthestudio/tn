export const TaskGenerateActions = {
  POST: 'GENERATE_TASK',
  POST_WAITING: 'GENERATE_TASK_WAITING',
  POST_SUCCESS: 'GENERATE_TASK_SUCCESS',
  POST_ERROR: 'GENERATE_TASK_ERROR',
};

const post = (taskToGenerate: number) => ({ type: TaskGenerateActions.POST, params: { quantity: taskToGenerate } });
const postWaiting = () => ({ type: TaskGenerateActions.POST_WAITING });
const postSuccess = (response: any) => ({ type: TaskGenerateActions.POST_SUCCESS, response });
const postError = (error: any) => ({ type: TaskGenerateActions.POST_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
};
