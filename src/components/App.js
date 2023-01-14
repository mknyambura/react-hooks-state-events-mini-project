import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectCategory, setSelectCategory] = useState('All');
  const displayTasks = [...tasks]

  if(selectCategory !== 'All'){
    displayTasks = tasks.filter((task) => {
      return task.category === selectCategory
    })
  }
  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDelete(deleteTask){
    setTasks(tasks.filter((task) => {
      return task.text !== deleteTask
    }))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectCategory={selectCategory}
        setCategory={setSelectCategory}/>
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList 
        tasks={displayTasks}
        handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
