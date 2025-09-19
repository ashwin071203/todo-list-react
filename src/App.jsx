import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import AddTaskPopup from './components/AddTaskPopup';
import './App.css';

const initialTasks = [];

const About = () => <div className="content"><h2>About</h2><p>About this app.</p></div>;
const Settings = () => <div className="content"><h2>Settings</h2><p>App settings.</p></div>;

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleToggleComplete = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDelete = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const handleAddTask = (task) => {
    setTasks(tasks => [...tasks, task]);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <button
            className="add-task-btn"
            onClick={() => setShowAddPopup(true)}
            aria-label="Add Task"
          >
            <span className="add-task-text">Add Task</span>
            <span className="add-task-plus">+</span>
          </button>
          <Routes>
            <Route path="/tasks" element={<TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />} />
          </Routes>
        </div>
        {showAddPopup && (
          <AddTaskPopup onSave={handleAddTask} onClose={() => setShowAddPopup(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;