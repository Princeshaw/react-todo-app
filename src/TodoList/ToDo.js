import React from 'react';

import '../App.css';



const toDo = (props) =>{
  const deleteToDoHandeler = () =>{
    props.setTodos(props.toDos.filter((el) => el.id !== props.todo.id));
  }
    return(
    <div className="todo">
      <li className="todo-item">{props.text}</li>
      <button className="complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <button onClick ={deleteToDoHandeler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>

    </div>
    );
}

export default toDo;