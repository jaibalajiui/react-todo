import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoItems from './todo-item/todo-item';

class App extends React.Component {
  
  render(){
    return (
      <TodoItems/>
    )
  };
}

export default App;
