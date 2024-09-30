import { Router } from "express";
import Todo from "../models/todo";
import CreateTodoDto from "../dtos/createTodoDto";

const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

todoRouter.post("/", async (req, res) => {
  const { title } = req.body as CreateTodoDto;
  const todo = new Todo({ title: title });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

todoRouter.delete("/:todoId", async (req, res) => {
  try {
    const removedTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(removedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

export default todoRouter;
