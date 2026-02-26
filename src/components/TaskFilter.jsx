import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
    const filters = ['All', 'Pending', 'Completed'];

    return (
        <div className="task-filter">
            {filters.map(filter => (
                <button
                    key={filter}
                    className={`btn filter-btn ${currentFilter === filter ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default TaskFilter;
