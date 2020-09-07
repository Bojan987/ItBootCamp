import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { v1 as uuidv1 } from 'uuid';
import { Todo } from './components/Todo';

// На клик параграфа за todo, променити стање done (и додати стилизацију)
// Додати дугме delete које брише одређени todo


const App = () => {
  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  

  return (
    <>
      <input 
        onChange={(e) => {
          setText(e.target.value)
          console.log(e.target.value)
        }}
        value={text}
      />
      <button 
        onClick={() => {
          setTodos([...todos,{id: uuidv1(),task: text,done: false}])
          
          setText('')
        }}
      >
        Додај
      </button>
      {todos.map(el => <Todo key={el.id} todo={el} />)}
      
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)