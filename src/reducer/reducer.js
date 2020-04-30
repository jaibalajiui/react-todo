import {ADD_TODO, addTodo} from '../actions/actions';

const initialState = {
    id:0,
    text: 'this is first todo'
}
export function toDoAppReducer(state =[],action){   
    switch(action.type){
        case ADD_TODO:return [...state,{
            id:state.length,
            text: action.text
        }];
        default: return state;
    }
}