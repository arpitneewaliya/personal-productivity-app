import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <li className={`task-item surface ${task.completed ? 'completed' : ''}`}>
            <div className="task-item-content">
                <div className="task-checkbox-container" onClick={() => onToggle(task.id)}>
                    <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Mark task "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
                    />
                </div>
                <span className="task-title" title={task.title}>{task.title}</span>
            </div>

            <span className={`task-category cat-${task.category}`}>
                {task.category}
            </span>

            <button
                className="btn btn-icon task-delete"
                onClick={() => onDelete(task.id)}
                aria-label="Delete Task"
                title="Delete Task"
            >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </li>
    );
};

export default TaskItem;
