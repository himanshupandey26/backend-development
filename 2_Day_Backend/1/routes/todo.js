const express = require('express');
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodos } = require("../controllers/getTodos");
// const { updateTodo } = require("../controllers/createTodo"); getTodoByID

router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos);

module.exports = router;