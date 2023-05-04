import React from 'react'
import { useNavigate } from 'react-router-dom'
const TodoItem = ({text,todoId}) => {
  const navigate = useNavigate()
  return (
    <div>
       <br/> <br/>

        <div>{text}</div>
        <button onClick={()=>navigate(`/edit-todo/${todoId}`)}>edit</button>
        <button onClick={()=>console.log("delete")}>delete </button>
        {/* <button onClick={()=>console.log("done")}>done</button> */}
    </div>
  )
}

export default TodoItem