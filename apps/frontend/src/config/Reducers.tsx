import { combineReducers } from 'redux';
import { generateTasksReducer } from '../components/generate/GenerateTasksReducer';
import { getTasksListReducer } from '../components/list/ListTasksReducer';

export const rootReducers = combineReducers({
    getTasksListReducer,
    generateTasksReducer
});