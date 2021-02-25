import React from 'react';
import ToDo from './ToDo'
import '../App.css';

const toDoList = (props) =>{
    return(
    <div className="todo-container">
      <ul className="todo-list">
        
        {props.toDos.map(
          todo =>(
            <ToDo todo={todo} setTodos ={props.setTodos} toDos = {props.toDos} text = {todo.text} key = {todo.id}/>
          )
        )}

      </ul>
    </div>
    );
}

export default toDoList;