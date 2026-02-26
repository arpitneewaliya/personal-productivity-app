import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, currentFilter }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state surface">
                <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <p>
                    {currentFilter === 'Completed'
                        ? "No completed tasks yet. Keep going!"
                        : currentFilter === 'Pending'
                            ? "No pending tasks. You're all caught up!"
                            : "Your task list is empty. Add a task to get started."}
                </p>
            </div>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TaskList;
