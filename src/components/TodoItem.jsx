import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice.jsx'
const TodoItem = ({text,todoId}) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  return (
    <div>
       <br/> <br/>

        <div>{text}</div>
        <button onClick={()=>navigate(`/edit-todo/${todoId}`)}>edit</button>
        <button onClick={()=>dispatch(deleteTodo(todoId))}>delete </button>
        {/* <button onClick={()=>console.log("done")}>done</button> */}
    </div>
  )
}

export default TodoItem