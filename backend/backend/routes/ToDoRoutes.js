const { Router } = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../Controller/ToDoController');

const router = Router();

router.get('/', async (req, res) => {
    try {
        await getToDo(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err.message });
    }
});

router.post('/save', async (req, res) => {
    try {
        await saveToDo(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Error saving todo', error: err.message });
    }
});

router.post('/update', async (req, res) => {
    try {
        await updateToDo(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Error updating todo', error: err.message });
    }
});

router.post('/delete', async (req, res) => {
    try {
        await deleteToDo(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Error deleting todo', error: err.message });
    }
});

module.exports = router;
