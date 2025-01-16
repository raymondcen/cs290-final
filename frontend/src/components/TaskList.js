import React from 'react';
import Task from './Task';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <table id="tasks">
            <caption>Add and Edit Tasks</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, i) => 
                    <Task 
                        task={task} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TaskList;
