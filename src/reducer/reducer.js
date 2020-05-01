import {ADD_TODO} from '../actions/actions';


export function toDoAppReducer(state =[],action){   
    switch(action.type){
        case ADD_TODO:return [...state,{
            id:state.length,
            text: action.text
        }];
        default: return state;
    }
}