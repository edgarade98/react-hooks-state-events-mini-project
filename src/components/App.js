import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(
    TASKS
  );
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code"
  })

  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleDelete(taskText) {
    const newTasks = tasks.filter((task) => task.text !== taskText.text);
    setTasks(selectedTasks(newTasks));
  }
  function selectedTasks(task) {
    if (selectedCategory === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.category === selectedCategory);
    }
  }
  function onTaskFormSubmit(e) {
    e.preventDefault();
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setNewTask({
      text: "",
      category: ""
    })
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        newCategory={newTask.category}
        newText={newTask.text}
        setNewTask={setNewTask}
        onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList handleDelete={handleDelete} tasks={selectedTasks(tasks)} />
    </div>
  );
}

export default App;