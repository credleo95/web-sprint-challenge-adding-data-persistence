const express = require('express');
const model = require('./model');

const router = express.Router();

/*`[POST] /api/resources`
 - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`*/
router.post('/');
/*

- [ ] `[GET] /api/resources`
 - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]` */
router.get('/');

module.exports = router;
