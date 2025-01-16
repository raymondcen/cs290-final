// Controllers for the Task Collection

import 'dotenv/config';
import express from 'express';
import * as tasks from './tasks-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/tasks', (req,res) => { 
    tasks.createTask(
        req.body.name, 
        req.body.dueDate,
        req.body.priority,
        req.body.complete,
        )
        .then(task => {
            console.log(`"${task.name}" was added to the collection.`);
            res.status(201).json(task);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Task could not be created. Error 400 (bad request).' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/tasks', (req, res) => {
    tasks.retrieveTasks()
        .then(tasks => { 
            if (tasks !== null) {
                console.log(`All tasks were retrieved from the collection.`);
                res.json(tasks);
            } else {
                res.status(404).json({ Error: 'Tasks could not be found. Error 404 (not found).' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Tasks could not be retrieved. Error 400 (bad request).' });
        });
});


// RETRIEVE by ID controller
app.get('/tasks/:_id', (req, res) => {
    tasks.retrieveTaskByID(req.params._id)
    .then(task => { 
        if (task !== null) {
            console.log(`"${task.name}" was retrieved, based on its ID.`);
            res.json(task);
        } else {
            res.status(404).json({ Error: 'Tasks could not be found by ID. Error 404 (not found).' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Tasks could not be retrieved by ID. Error 400 (bad request).' });
    });

});


// UPDATE controller ************************************
app.put('/tasks/:_id', (req, res) => {
    tasks.updateTask(
        req.params._id, 
        req.body.name,  
        req.body.dueDate,
        req.body.priority,
        req.body.complete,
    )
    .then(task => {
        console.log(`"${task.name}" was updated.`);
        res.json(task);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Task could not be updated. Error 400 (bad request).' });
    });
});


// DELETE Controller ******************************
app.delete('/tasks/:_id', (req, res) => {
    tasks.deleteTaskById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} task was deleted.`);
                res.status(200).send({ Success: 'Task was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Task could not be found to be deleted. Error 404 (not found).' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'There was an error deleting the task.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});