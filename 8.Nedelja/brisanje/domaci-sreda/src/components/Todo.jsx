import React from 'react'


export const Todo = ({ todo,deleteFunction }) => {


    return (
      <div onClick = {()=>deleteFunction(todo.id)} >
         <p>{todo.task} -- {todo.done + ''}</p>
      </div>
    )
    }