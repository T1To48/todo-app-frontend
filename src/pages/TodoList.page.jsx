import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { lokalStorage } from '../utils/lokalStorage.jsx'

import TodoItem from '../components/TodoItem.jsx';

const TodoList = () => {
  const navigate=useNavigate()
const {todoList}=useSelector(state=>state.todo)

  return (
    <div>
      <div>
        <button onClick={()=>navigate("/add-todo")} > add todo</button>
      </div>
      {todoList.map((todo) => (<TodoItem key={todo.id} todoId={todo.id} text={todo.content}/>))}
    </div>
  )
}

export default TodoList