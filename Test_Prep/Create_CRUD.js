/* Coding Question -Create a CRUD application: Build a web application for
managing a simple dataset (e.g., tasks, contacts). Implement functionalities for
creating, reading, updating, and deleting data using hooks and state
management. */

import React, { useState } from "react";
import "./App.css"; // Optional for styling

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Add new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      const newTaskObj = { id: newId, title: newTask };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  // Edit task
  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setNewTask(task.title);
  };

  // Update task
  const handleUpdateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTask.id ? { ...task, title: newTask } : task
      )
    );
    setNewTask("");
    setIsEditing(false);
    setCurrentTask(null);
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-app">
      <h1>Task Manager</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {isEditing ? (
          <button onClick={handleUpdateTask}>Update Task</button>
        ) : (
          <button onClick={handleAddTask}>Add Task</button>
        )}
      </div>

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span>{task.title}</span>
              <div className="task-actions">
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks available. Add a task!</p>
        )}
      </div>
    </div>
  );
};

export default TaskApp;
