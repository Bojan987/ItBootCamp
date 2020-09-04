import React from 'react';
import ReactDOM from 'react-dom';
import { Forma } from './Components/Forma';

const App = ()=>{
  return (
    <div>
        <Forma str="Dugme"/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


