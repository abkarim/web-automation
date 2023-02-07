const express = require('express');
const router = express.Router();
const task = require('../controller/task');
const response = require('../model/Response');

router.route('/task').get(task.getAll, response).post(task.create, response);

module.exports = router;
