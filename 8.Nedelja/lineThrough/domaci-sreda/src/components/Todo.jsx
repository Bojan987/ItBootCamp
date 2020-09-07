import React, { useState } from 'react'


export const Todo = ({ todo }) => {

    const [isDone,setIsDone] = useState(todo.done) 
    const handleTodo =()=>{
      
      setIsDone(previosValue =>{
        return !previosValue
      })
      todo.done =!todo.done
      console.log(todo)
    }
    
    return (
      <div onClick = {handleTodo} >
         <p style= {{textDecoration: isDone ? "line-through" : "none"}}>{todo.task} -- {isDone + ''}</p>
      </div>
      
    )
  }