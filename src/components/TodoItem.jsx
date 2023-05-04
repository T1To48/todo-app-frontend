import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice.jsx";
import "../styles/todoItem.css"
const TodoItem = ({ text, todoId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="todo-item-container">
      

      <div className="todo-item-content">{text}</div>

      <div className="todo-item-btns-container">
          <button className="todo-item-edit-btn" onClick={() => navigate(`/edit-todo/${todoId}`)}>edit</button>
      <button  className="todo-item-delete-btn" onClick={() => dispatch(deleteTodo(todoId))}>delete </button>
      </div>
    
    </div>
  );
};

export default TodoItem;


// <div>
// <br /> <br />
// <div>{text}</div>
// <button onClick={() => navigate(`/edit-todo/${todoId}`)}>edit</button>
// <button onClick={() => dispatch(deleteTodo(todoId))}>delete </button>
// </div>
