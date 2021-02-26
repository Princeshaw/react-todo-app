import React from 'react';

import '../App.css';



const toDo = (props) =>{
  const deleteToDoHandeler = () =>{
    props.setTodos(props.toDos.filter((el) => el.id !== props.todo.id));
  }
  const completeToDoHandler = () =>{
    props.setTodos(props.toDos.map(item=>{
      if(item.id===props.todo.id){
        return{
          ...item,completed:!item.completed
        }
      }
      return item
    }))
  }
    return(
    <div className="todo">
      <li className={`todo-item ${props.todo.completed? "completed" : ""}`}>{props.text}</li>
      <button onClick = {completeToDoHandler} className="complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <button onClick ={deleteToDoHandeler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>

    </div>
    );
}

export default toDo;