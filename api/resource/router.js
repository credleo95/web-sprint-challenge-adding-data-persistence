const express = require('express');
const Resource = require('./model');

const router = express.Router();

/*`[POST] /api/resources`
 - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`*/
router.post('/', (req, res, next) => {
  Resource.createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});
/*

- [ ] `[GET] /api/resources`
 - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]` */
router.get('/', (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

module.exports = router;
