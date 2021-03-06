import React, {  useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

import {  Home } from './components/Home';

import { Profile } from './components/Profile';
import { Table } from './JuggernautHunt/Table';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { HeroHunt } from './HeroHunt/HeroHunt';


function App() {

  const [newUser, setNewUser] = useState({ username: "", password: "",score:0 });
  

  return (
    <div className='App'>
      
     <Router>
       <Switch>
         <Route exact path='/'>
            <Login newUser={newUser} setNewUser={setNewUser}/>
            
         </Route>
         <Route  exact path='/user'>
           {localStorage.getItem('LoggedUser') !==null ? <Home/>: <Redirect to='/'/> }
         </Route>
         <Route path="/user/:username">
            <Profile/>
         </Route>
         <Route  path='/JuggernautHunt'>
            <Table nrows={5} ncols={5} chanceJuggOnStart ={0.25} />
         </Route>
         <Route  path='/Register'>
         <Register newUser={newUser} setNewUser={setNewUser}/>
         </Route>
         <Route path='/HeroHunt'>
           <HeroHunt />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
