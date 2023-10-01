const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


//normal
// router.get('/', (req, res) => {
// Con callback
// Task.find(function (data) {
//     res.json();
// });

//con promesas
//     Task.find();
//         .then(data => {
//         res.json(data);
//     });
// });

// con async y await
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({
        status: 'Task Saved'
    })
});

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task Update'
    });
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Task Deleted'
    });
});


module.exports = router;