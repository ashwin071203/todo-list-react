import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AddTaskPopup from './components/AddTaskPopup';
import EditTaskPopup from './components/EditTaskPopup';
import AppRoutes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const initialTasks = [];


const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleToggleComplete = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDelete = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };



  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowAddPopup(true);
  };

  const handleSaveTask = (task) => {
    setTasks(tasks => [...tasks, task]);
    setShowAddPopup(false);
  };

  const handleUpdateTask = (task) => {
    setTasks(tasks => tasks.map(t => t.id === editingTask.id ? { ...t, ...task } : t));
    setEditingTask(null);
    setShowAddPopup(false);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <button
            className="add-task-btn"
            onClick={() => setShowAddPopup(true)}
            
          >
            <span className="add-task-text">Add Task</span>
            {/* <span className="add-task-plus">+</span> */}
          </button>
          <AppRoutes
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
            onEdit={handleEditTask}
          />
        </div>
        {showAddPopup && (
          editingTask ? (
            <EditTaskPopup
              initialTask={editingTask}
              onSave={handleUpdateTask}
              onClose={() => { setShowAddPopup(false); setEditingTask(null); }}
            />
          ) : (
            <AddTaskPopup
              onSave={handleSaveTask}
              onClose={() => setShowAddPopup(false)}
            />
          )
        )}
      </div>
    </Router>
  );
}

export default App;