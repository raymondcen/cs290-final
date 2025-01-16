import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskList from '../components/TaskList';
// import { Link } from 'react-router-dom';

import { GrAdd } from "react-icons/gr";


function TasksPage({ setTask }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [tasks, setTasks] = useState([]);

    // RETRIEVE the entire list of tasks
    const loadTasks = async () => {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        setTasks(tasks);
    } 
    

    // UPDATE a single task
    const onEditTask = async task => {
        setTask(task);
        redirect("/update");
    }


    // DELETE a single task  
    const onDeleteTask = async _id => {
        const response = await fetch(`/api/tasks/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/api/tasks');
            const tasks = await getResponse.json();
            setTasks(tasks);
        } else {
            console.error(`Task has been deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the tasks
    useEffect(() => {
        loadTasks();
    }, []);

    // DISPLAY the tasks
    return (
        <>
            <h2>List of Tasks</h2>
            <p>A list of completed and to-be completed tasks.</p>
            <button onClick={() => redirect("/create")}> <i><GrAdd /></i>Add Task </button>
            <TaskList 
                tasks={tasks} 
                onEdit={onEditTask} 
                onDelete={onDeleteTask} 
            />
        </>
    );
}

export default TasksPage;