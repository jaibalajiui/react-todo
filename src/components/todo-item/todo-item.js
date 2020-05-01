import React, { Component } from "react";
import './todo-item.css';

class TodoItems extends Component {

    constructor(props){
        super(props);
        this.state = {
            itemsList: []
        }
        this.item = null;
        console.log("state: costructor",this.state);
    }

    changeItemHandler = (event)=>{
       this.setState({
           item: event.target.value
       });
       console.log("changeItem Handler state",this.state);
    }

    addItemHandler = (event)=>{
        // this.setState(
        //     {
        //         itemsList:[...this.state.itemsList,this.state.item],
        //         item: ''
        //     }
        // );
        // console.log("addItem Handler state: ",this.state);
        this.props.addTodo(event.target.value);
        
    }

    render()
    {
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-sm-12">
                    <h2 className="text-center">To-Do List Application</h2>
                        <div className="todo-item">
                            <div className="form-group">
                                <input className="form-control" placeholder="Enter the item" onChange={this.changeItemHandler} value={this.state.item}/>
                                <button className="form-control btn btn-primary" onClick={this.addItemHandler}> Add Item </button>
                            </div> 
                        </div>
                        <div>
                            { this.state.itemsList.length ?
                                <ul className="list-group todo-list">
                                    {   
                                        this.state.itemsList.map((item,index)=>{
                                            return(<li className="list-group-item" key={index}> {item} </li>)
                                        })
                                    }
                                </ul>
                            : <div className="text-center">No elements</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItems;