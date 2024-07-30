import TaskModel from "../models/Task.js";
import connect from "../config/db.js";
import dotenv from 'dotenv';



connect();

dotenv.config();







 // Get Tasks
 const getTasks = async (req, res) => {
  const tasks = await TaskModel.find({ });
  res.json(tasks);
};




// Add Tasks
const addTask = async (req, res) => {
    const { title, description } = req.body;

    console.log("check incoming data",{title,description});
  
    const task = new TaskModel({
      title,
      description,
    });
  
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  };
  
 

  const deleteTask = async (req, res) => {
    try {

      console.log(req.params.id);
      const task = await TaskModel.findOne({ _id: req.params.id });
  
      if (!task) {
        res.status(404);
        throw new Error('Task not found');
      }
  
  
      const result = await TaskModel.deleteOne({ _id: req.params.id });
  
      if (result.deletedCount === 1) {
        res.json({ message: 'Task deleted successfully' });
      } else {
        res.status(404);
        throw new Error('Task not found');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
// update task 
  const updateTask = async (req, res) => {
    const { title, description, completed } = req.body;

    console.log(title);
    console.log(description);

    
    console.log(req.params.id);
    
    console.log(req.params);

    const task = await TaskModel.findById(req.params.id);
  
    if (task) {
     
      task.set({

        title : title || task.title,
        description : description || task.description,
        completed : completed !== undefined ? completed : task.completed,

      })
   
  
      const updatedTask = await task.save();
      res.json(updatedTask);

    } else {
      
      res.status(404);
      throw new Error('Task not found');
    }
  };


// Mark task as completed

  const markTaskCompleted = async (req, res) => {
    try {
      const task = await TaskModel.findById(req.params.id);
  
      if (!task) {
        res.status(404);
        throw new Error('Task not found');
      }
  
      task.completed = true; // Set task as completed
      await task.save();
  
      res.json({ message: 'Task marked as completed' });
    } catch (error) {
      console.error('Error marking task as completed:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  


export { addTask, getTasks ,deleteTask, updateTask , markTaskCompleted };