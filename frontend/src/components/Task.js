import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaRegMinusSquare, FaEdit  } from "react-icons/fa";


function Task({ task, onEdit, onDelete }) {
    return (
        <tr>
            <td>{task.name}</td>
            <td>{task.dueDate.slice(0,10)}</td>
            <td>{task.priority}</td>
            <td>{task.complete}</td>

            {/* Update these icons to something that matches your style. */}
            <td><i><FaRegMinusSquare onClick={() => onDelete(task._id)} /></i></td>
            <td><i><FaEdit onClick={() => onEdit(task)} /></i></td>
        </tr>
    );
}

export default Task;