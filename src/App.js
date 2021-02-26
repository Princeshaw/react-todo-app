import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App(props) {

  const [inputText,setInputText] = useState("");
  const [toDos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterdTodos,setFilteredTodos] = useState([]);

//run once when app starts
useEffect(() => {
  getLocalStorage();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  },[toDos,status])

  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilteredTodos(toDos.filter(todo => todo.completed ===true));
        break;
      case "uncompleted":
        setFilteredTodos(toDos.filter(todo => todo.completed ===false));
        break;
      default:
        setFilteredTodos(toDos);
        break;  
    }

  }

  const saveLocalStorage = () =>{
    localStorage.setItem("toDos",JSON.stringify(toDos));
  }

  const getLocalStorage = () =>{
    if(localStorage.getItem("toDos")===null){
      localStorage.setItem("toDos",JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("toDos",JSON.stringify(toDos)));
      setTodos(todoLocal);

    }
  }
  
    return (
      <div className="App">
        <header>
          <h1>To Do List {inputText}</h1>
        </header>
        <Form 
        inputText = {inputText}
         setInputText = {setInputText} 
         toDos={toDos}
         setTodos={setTodos}
         setStatus = {setStatus}
         />
        <TodoList filterdTodos={filterdTodos} toDos={toDos} setTodos={setTodos}/>
      </div>
    );
  
}

export default App;
