const express = require('express');
const router = express.Router();

const { createTodo } = require("../controller/createTodo");
const { getTodos, getTodoByID } = require('../controller/getTodos');
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");

router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos);
router.get('/getTodos/:id', getTodoByID);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

module.exports = router;