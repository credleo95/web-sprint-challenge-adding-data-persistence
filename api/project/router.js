const express = require('express');
const model = require('./model');

const router = express.Router();
/*
[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
*/
router.post('/', (req, res, next) => {
  const project = req.body;

  model
    .createProject(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

/*`[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
*/
router.get('/', (req, res, next) => {
  model
    .getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

module.exports = router;
