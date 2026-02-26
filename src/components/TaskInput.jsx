import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('work');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAddTask({
            title: title.trim(),
            category: category,
            completed: false,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString()
        });

        setTitle('');
    };

    return (
        <form className="task-input-form surface" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="What do you need to do?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="work">Work</option>
                    <option value="study">Study</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!title.trim()}>
                Add Task
            </button>
        </form>
    );
};

export default TaskInput;
