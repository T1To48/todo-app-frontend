import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../features/todo/todoSlice.jsx";
const AddTodoItem = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
const updateTodoList=()=>{
    dispatch(addTodo(todoText))
    navigate("/")
}

  return (
    <>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={updateTodoList}>save</button>
      <button onClick={() => navigate("/")}>cancel</button>
    </>
  );
};

export default AddTodoItem;
