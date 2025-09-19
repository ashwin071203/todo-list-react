import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

const priorityColors = {
    High: 'red',
    Medium: 'yellow',
    Low: 'green',
};

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
    const today = [];
    const upcoming = [];
    const overdue = [];
    const completed = [];
    const now = new Date();

    tasks.forEach(task => {
        const due = new Date(task.dueDate);
        if (task.completed) {
            completed.push(task);
        } else if (due < now) {
            overdue.push(task);
        } else if (due.toDateString() === now.toDateString()) {
            today.push(task);
        } else {
            upcoming.push(task);
        }
    });

    const renderTasks = (list) => (
        list.length === 0 ? <div className="empty">No tasks</div> : (
            <ul className="task-list">
                {list.map(task => (
                    <li key={task.id} className="task-item">
                        <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                        <span className="task-title">{task.title}</span>
                        <span className="task-date">{task.dueDate}</span>
                        <span className="task-priority" style={{ color: priorityColors[task.priority] }}>{task.priority}</span>
                        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    );

    return (
        <div className="task-categories">
            <div className="category">
                <h3>Today</h3>
                {renderTasks(today)}
            </div>
            <div className="category">
                <h3>Upcoming</h3>
                {renderTasks(upcoming)}
            </div>
            <div className="category">
                <h3>Overdue</h3>
                {renderTasks(overdue)}
            </div>
            <div className="category">
                <h3>Completed</h3>
                {renderTasks(completed)}
            </div>
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TaskList;
