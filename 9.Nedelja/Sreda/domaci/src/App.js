import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { AllUsers } from './components/AllUsers';
import { Filter } from './components/Filter';
import { FilteredUsers } from './components/FilteredUsers';
import { getAllUsers } from './services';

function App() {

  const [users,setUsers]=useState([])
  const [filter,setFilter] = useState('')

  useEffect(()=>{
    getAllUsers().then(res=>{
      console.log(res)
      setUsers(res.data.data)
    })
  },[])
  return (
      <div>
        <p>Hello</p>
        <Router>
          <nav>
            <Link to='/'>Show Users</Link>
            <Link to='/filter'>Filter Users</Link>
          </nav>
          <Switch>
            <Route exact path='/'>
              <AllUsers users={users}/>
            </Route>
            <Route path='/Filter' >
              <Filter setFilter={setFilter}/>
              <FilteredUsers users={users} filter={filter} setUsers={setUsers} />
            </Route>
          </Switch>

        </Router>
      
      </div>
      
  );
}

export default App;
