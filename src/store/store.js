import {createStore} from 'redux';
import {toDoAppReducer} from '../reducer/reducer';

export const store = createStore(toDoAppReducer)