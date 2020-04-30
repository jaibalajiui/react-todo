import {createStore} from 'redux';
import {toDoAppReducer} from '../reducer/reducer';

function configureStore(){
    const store = createStore(toDoAppReducer
        )
}