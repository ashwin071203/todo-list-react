import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTaskPopup.css';

const EditTaskPopup = ({ initialTask, onSave, onClose }) => {
    const [title, setTitle] = useState(initialTask?.title || '');
    const [description, setDescription] = useState(initialTask?.description || '');
    const [dueDate, setDueDate] = useState(initialTask?.dueDate || '');
    const [priority, setPriority] = useState(initialTask?.priority || 'Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSave({
            ...initialTask,
            title,
            description,
            dueDate,
            priority,
        });
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Edit Task</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task-title">Task Title<span className="required">*</span></label>
                    <input id="task-title" type="text" value={title} onChange={e => setTitle(e.target.value)} required />

                    <label htmlFor="task-desc">Task Description</label>
                    <textarea id="task-desc" value={description} onChange={e => setDescription(e.target.value)} />

                    <label htmlFor="task-date">Due Date</label>
                    <input id="task-date" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />

                    <label htmlFor="task-priority">Priority</label>
                    <select id="task-priority" value={priority} onChange={e => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <div className="popup-actions">
                        <button type="submit" className="save-btn">Update</button>
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

EditTaskPopup.propTypes = {
    initialTask: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditTaskPopup;
