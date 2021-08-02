const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  await Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Tasks.createTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
