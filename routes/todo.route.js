const express = require("express");
const { TodoModel } = require("../models/todo.model");
const { authCheck } = require("../middlewares/auth");
const { request } = require("express");
const todoRoute = express.Router();
todoRoute.use(authCheck);

todoRoute.get("/", async (req, res) => {
  const { userID } = req.body;
  const queries=req.query
  console.log(queries)
  const Todos = await TodoModel.find({ userID ,...queries});
  res.status(200).send(Todos);
});

todoRoute.get("/:TodoID", async (req, res) => {
  const { userID } = req.body;
  const TodoID = req.params.TodoID;
  try {
    const Todos = await TodoModel.find({ userID, _id: TodoID });
    res.status(200).send(Todos);
  } catch (err) {
    res.status(404).send({ msg: "not a valid ID" });
  }
});

todoRoute.post("/", async (req, res) => {
  console.log(req.body);
  const { taskname, tag, status, userID } = req.body;
  if (!taskname || !tag || !status || !userID)
    return res.status(406).send({ msg: "Please send the mandatory data" });
  const newTodo = new TodoModel({ taskname, tag, status, userID });
  await newTodo.save();
  res.status(201).send({ msg: "Todo created successfull" });
});

todoRoute.put("/:TodoID", async (req, res) => {
  const { userID } = req.body;
  const TodoID = req.params.TodoID;
  try {
    await TodoModel.findOneAndUpdate({ userID, _id: TodoID }, req.body);
    res.status(200).send({ msg: "Todo Updated successfully" });
  } catch (err) {
    res.status(404).send({ msg: "Request Not accepted" });
  }
});

todoRoute.patch("/:TodoID", async (req, res) => {
  const { userID } = req.body;
  const TodoID = req.params.TodoID;
  try {
    await TodoModel.findOneAndUpdate({ userID, _id: TodoID }, req.body);
    res.status(200).send({ msg: "Todo Updated successfully" });
  } catch (err) {
    res.status(404).send({ msg: "Request Not accepted" });
  }
});


todoRoute.delete("/:TodoID", async (req, res) => {
    const { userID } = req.body;
    const TodoID = req.params.TodoID;
    try {
      await TodoModel.findOneAndDelete({ userID, _id: TodoID });
      res.status(200).send({ msg: "Todo Deleted successfully" });
    } catch (err) {
      res.status(404).send({ msg: "Request Not accepted" });
    }
  });


module.exports = { todoRoute };
