import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTaskPageForm = ({ task }) => {
 
    const [name, setName]       = useState(task.name);
    const [dueDate, setDate]      = useState(task.dueDate);
    const [priority, setPriority] = useState(task.priority);
    const [complete, setComplete] = useState(task.complete);
    
    const redirect = useNavigate();

    const editTask = async () => {
        const response = await fetch(`/api/tasks/${task._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                dueDate: dueDate, 
                priority: priority,
                complete: complete
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Task has successfully been editted. `);
        } else {
            const errMessage = await response.json();
            alert(`Task could not be editted, status code ${response.status}. ${errMessage.Error}`);
        }
        redirect("/tasks");
    }

    return (
        <>
        <article>
            <h2>Edit a task</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which task are you adding?</legend>
                    <p>
                        <label for="name">Task Name</label>
                        <input
                            type="text"
                            placeholder="Name of the task"
                            value={name}
                            maxlength="25"
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </p>
                    
                   <p>
                        <label for="dueDate">Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            placeholder="Due Date"
                            onChange={e => setDate(e.target.value)} 
                            id="dueDate" />
                   </p>

                    <p>
                        <label for="priority">Priority</label>
                        <input
                            type="number"
                            placeholder="Priority of the task"
                            value={priority}
                            onChange={e => setPriority(e.target.value)} 
                            id="priority" />
                    </p>
                    <p>
                        <label for="complete">Completed?</label>
                        <input
                            type="text"
                            placeholder="Done, WIP, not done, etc."
                            value={complete}
                            maxlength="25"
                            onChange={e => setComplete(e.target.value)} 
                            id="complete" />
                    </p>
                    <p>
                        <label for="submit">
                        <button
                            type="submit"
                            onClick={editTask}
                            id="submit"
                        >Save Change</button></label>
                    </p>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditTaskPageForm;