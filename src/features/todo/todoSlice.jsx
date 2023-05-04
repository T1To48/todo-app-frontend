import { createSlice } from "@reduxjs/toolkit";
import { getTodoById, deleteTodoById } from "./todoService.jsx";

import uniqid from "uniqid";
import { lokalStorage } from "../../utils/lokalStorage.jsx";

const initialState = {
  todoItem: {},
  todoList: lokalStorage("get", "todoList") || [],
};

const todoList = () => lokalStorage("get", "todoList");

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodoItem: (state, action) => {
      const todoId = action.payload;
      //   const todo=lokalStorage("get","todoList").filter((todo)=>todo.id===todoId);
      state.todoItem = getTodoById(todoId);
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: uniqid(),
        content: action.payload,
      };

      state.todoList.push(newTodo);

      lokalStorage("set", "todoList", state.todoList);
    },
    editTodo: (state, action) => {
      const todoItem = action.payload;
      state.todoList = todoList().map((todo) => {
        if (todo.id === id) return todoItem;
      });
      lokalStorage("set", "todoList", state.todoList);

      //   const todo=lokalStorage("get","todoList").filter((todo)=>todo.id===todoId);
      state.todoItem = getTodoById(todoItem.id);
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.todoList = deleteTodoById(todoId);

      state.todoItem = {
        success: true,
        data: `Todo Item with The ID ${todoId}, was successfully deleted`,
      };
    },
  },
});

export const { getTodoItem, addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;