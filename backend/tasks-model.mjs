// Models for the Task Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Error connecting to the data base. Error 500 (Internal Server).' });
    } else  {
        console.log('Success: Successfully connected to the database.');
    }
});

// SCHEMA: Define the collection's schema.
const taskSchema = mongoose.Schema({
	name:    { type: String, required: true },
	dueDate: { type: Date, required: true },
    priority:{ type: Number, required: true },
    complete:{ type: String, required: true },
});

// Compile the model from the schema 
// by defining the collection name "tasks".
const tasks = mongoose.model('Tasks', taskSchema);


// CREATE model *****************************************
const createTask = async (name,  dueDate, priority, complete) => {
    const task = new tasks({ 
        name: name, 
        dueDate: dueDate, 
        priority: priority,
        complete: complete, 
    });
    return task.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTasks = async () => {
    const query = tasks.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTaskByID = async (_id) => {
    const query = tasks.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTaskById = async (_id) => {
    const result = await tasks.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTask = async (_id, name, dueDate, priority, complete) => {
    const result = await tasks.replaceOne({_id: _id }, {
        name: name,
        dueDate: dueDate,
        priority: priority,
        complete: complete, 
    });
    return { 
        _id: _id, 
        name: name,
        dueDate: dueDate,
        priority: priority,
        complete: complete, 
    }
}

// EXPORT the variables for use in the controller file.
export { createTask, retrieveTasks, retrieveTaskByID, updateTask, deleteTaskById }