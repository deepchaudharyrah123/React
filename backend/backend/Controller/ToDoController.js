const ToDoModel = require('../models/ToDoModels');

module.exports.getToDo = async (req, res) => {
    try {
        const todos = await ToDoModel.find();
        res.status(200).json(todos);
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).json({ message: 'Error fetching todos', error: err.message });
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }
        const newToDo = new ToDoModel({ text });
        const savedToDo = await newToDo.save();
        res.status(201).json(savedToDo);
    } catch (err) {
        console.error('Error saving todo:', err);
        res.status(500).json({ message: 'Error saving todo', error: err.message });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    try {
        await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });
        res.status(200).json({ message: 'Update Successful' });
    } catch (err) {
        console.error('Error updating todo:', err);
        res.status(500).json({ message: 'Error updating todo', error: err.message });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
        await ToDoModel.findByIdAndDelete(_id);
        res.status(200).json({ message: 'Delete Successful' });
    } catch (err) {
        console.error('Error deleting todo:', err);
        res.status(500).json({ message: 'Error deleting todo', error: err.message });
    }
};
