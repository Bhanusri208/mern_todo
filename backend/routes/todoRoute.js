const todoController = require('../controllers/todoController');
const express = require('express');

const router = express.Router();

router.post('/todos', todoController.myTodos);

module.exports = router;