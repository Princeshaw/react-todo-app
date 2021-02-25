import React from 'react';

import '../App.css';

const toDo = () =>{
    return(
    <div className="todo">
      <li className="todo-item">Heyy</li>
      <button className="complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>

    </div>
    );
}

export default toDo;