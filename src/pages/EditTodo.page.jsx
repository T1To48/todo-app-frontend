import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTodoItem, editTodo } from "../features/todo/todoSlice.jsx";
const EditTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todoId } = useParams();
  const { todoItem } = useSelector((state) => state.todo);
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSave = () => {
    const todoObj = {
      id: todoId,
      content: todoText,
    };
    dispatch(editTodo(todoObj));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getTodoItem(todoId));
  }, []);
  
  useEffect(() => {
    setTodoText(todoItem.content);
  }, [todoItem]);

  return (
    <>
      <input value={todoText} onChange={handleChange} />
      <button onClick={handleSave}>save</button>
      <button onClick={() => navigate("/")}>cancel</button>
    </>
  );
};

export default EditTodo;
