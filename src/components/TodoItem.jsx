import React from 'react'

const TodoItem = ({text}) => {
  return (
    <div>
       <br/> <br/>

        <div>{text}</div>
        <button onClick={()=>Navigate("/edit-todo")}>edit</button>
        <button onClick={()=>console.log("delete")}>delete </button>
        {/* <button onClick={()=>console.log("done")}>done</button> */}
    </div>
  )
}

export default TodoItem