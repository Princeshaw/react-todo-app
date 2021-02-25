import React from 'react';
import ToDo from './ToDo'
import '../App.css';

const toDoList = () =>{
    return(
    <div className="todo-container">
      <ul className="todo-list">
        <ToDo/>
      </ul>
    </div>
    );
}

export default toDoList;