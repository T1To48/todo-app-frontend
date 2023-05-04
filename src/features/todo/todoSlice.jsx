import { createSlice } from "@reduxjs/toolkit";
import { getTodoById, deleteTodoById } from "./todoService.jsx";

import uniqid from "uniqid";
import { lokalStorage } from "../../utils/lokalStorage.jsx";


const todoList = () => lokalStorage("get", "todoList");

const initialState = {
  todoItem: {},
  todoList: lokalStorage("get", "todoList") || [],
};



export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodoItem: (state, action) => {
      const todoId = action.payload;
      //   const todo=lokalStorage("get","todoList").filter((todo)=>todo.id===todoId);
      state.todoItem = getTodoById(todoId)[0];
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
        console.log("todoItem", todo.id);
        if (todo.id === todoItem.id) return todoItem;
        else return todo
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