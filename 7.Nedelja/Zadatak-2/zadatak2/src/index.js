import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card';

const App = ()=>{
  return (
    <div> 
      <Card string="A classic alien face. The oval, bare head of a gray or green alien with large black eyes and a slight, friendly smile. Samsung depicts nostrils, Facebook a nose." url="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/alien_1f47d.png"/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

