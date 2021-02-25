import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App(props) {

  const [inputText,setInputText] = useState("");
  const [toDos,setTodos] = useState([]);
  
    return (
      <div className="App">
        <header>
          <h1>To Do List {inputText}</h1>
        </header>
        <Form 
        inputText = {inputText}
         setInputText = {setInputText} 
         toDos={toDos}
         setTodos={setTodos}/>
        <TodoList toDos={toDos} setTodos={setTodos}/>
      </div>
    );
  
}

export default App;
