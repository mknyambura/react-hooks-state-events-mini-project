import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({text: '', category: 'Code'})
  const text = newTask.text;
  const category = newTask.category;

  function dataManage(event){
    const name = event.target.name;
    const value = event.target.value;
    setNewTask({...newTask, [name]: value})
  }

  function handleTaskFormSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(newTask)
    setNewTask({text:'', category: 'Code'})
  }
  return (
    <form className="new-task-form" onSubmit={handleTaskFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          onChange={dataManage}
          value={text}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange={dataManage}
          value={category}
        >
          console.log(categories)
          {/* render <option> elements for each category here */}
          {categories?.map(category => {
            if(category !== 'All'){
              return <option key={category}>{category}</option>
            }
            return true
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
