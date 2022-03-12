import React, { useState, useEffect } from 'react';
import './App.css';
import Tasks from './components/Task/Tasks';
import TodoForm from './components/TodoForm/TodoForm';




function App() {


  const getLocalStorage = () => {
    let list = localStorage.getItem("listTask");

    if (list) {
      return JSON.parse(localStorage.getItem("listTask"));
    } else {
      return [];
    }
  };





  const [task, setTask] = useState(getLocalStorage());



  const onSave = (text) => {

    const todo = {
      task: text,
      isComplete: false,

    };
    if (todo.task.length <= 1) {
      return
    } else
      setTask([...task, todo])

  }



  useEffect(() => {
    localStorage.setItem("listTask", JSON.stringify(task));
  }, [task]);




  const completeTask = (index) => {
    const nTask = [...task];
    nTask[index].isComplete = !nTask[index].isComplete;
    setTask(nTask)
  }

  const deleteTask = (index) => {
    let newTodo = [...task]
    newTodo.splice(index, 1)
    setTask(newTodo)


  }
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className='todo-app'>
        <TodoForm onSave={onSave} tarefas={task} />
        <Tasks tarefas={task} deleteTask={deleteTask} completeTask={completeTask} />
      </div>

    </div>
  );
}

export default App;
