import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import TodoForm from './components/TodoForm';




function App() {

  const [task, SetTask] = useState([])


  const deleteTask = (index) => {
    let newTodo = [...task]
    newTodo.splice(index, 1)
    SetTask(newTodo)

  }

  const onSave = (text) => {

    const todo = {
      task: text,
      isComplete: false
    };

    SetTask([...task, todo])
  }


  const completeTask = (index) => {
    const nTask = [...task];
    nTask[index].isComplete = !nTask[index].isComplete;
    SetTask(nTask)
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className='todo-app'>
        <TodoForm onSave={onSave} />

        <Tasks tarefas={task} deleteTask={deleteTask} completeTask={completeTask} />
      </div>

    </div>
  );
}

export default App;
