import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTaskPageForm = () => {

    const [name, setName]          = useState('');
    const [dueDate, setDate]      = useState('');
    const [priority, setPriority] = useState('');
    const [complete, setComplete] = useState('');
    
    const redirect = useNavigate();

    const addTask = async () => {
        const newTask = { name, dueDate, priority, complete};
        const response = await fetch('/api/tasks', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Task was added.`);
            redirect("/tasks");
        } else {
            alert(`Task could not be added, staus code = ${response.status}`);
            redirect("/tasks");
        }
    };


    return (
        <>
        <article>
            <h2>Add a task</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What task are you adding?</legend>
                    <p>
                        <label for="name">Task Name</label>
                        <input
                            type="text"
                            placeholder="Name of the task (25 characters)"
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
                            placeholder="Done, WIP, not done, etc. (25 characters)"
                            value={complete}
                            maxlength="25"
                            onChange={e => setComplete(e.target.value)} 
                            id="complete" />
                    </p>
                    <p>
                        <label for="submit">
                        <button
                            type="submit"
                            onClick={addTask}
                            id="submit"
                        >Add</button> to the collection</label>
                    </p>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddTaskPageForm;