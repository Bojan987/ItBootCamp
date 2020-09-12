import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllLaunches, getCompanyName } from './services.js'
import './index.css';
import { Select } from './components/select.jsx'
import { Launches } from './components/Launches.jsx';

const App = () => {
  const [companyInfo, setCompanyInfo] = useState({})
  const [allLaunches, setAllLaunches] = useState([])
  const [filteredLaunches, setFilteredLaunches] = useState([])

  useEffect(() => {

    getAllLaunches().then(res => {
      console.log(res.data)
      setAllLaunches(res.data)
     
    })
    
  }, [])

  useEffect(() => {

    getCompanyName().then(res => {
      
      setCompanyInfo(res.data)
      
    })
  }, [])


useEffect(()=>{
  setFilteredLaunches(allLaunches)
},[allLaunches])


  return (<div>

              <h1>{companyInfo.name} </h1>
              <p>Founded : {companyInfo.founded} </p>
              <Select allLaunches={allLaunches} setFilteredLaunches={setFilteredLaunches} />
              <div  className="launch-list">
              <Launches filteredLaunches={filteredLaunches}/>
              </div>

              {/* <div className="inner-div-0">
                    <img src={allLaunches.links.mission_patch} alt="Missing "/>
              </div>
              <div className="inner-div-1">
                    <span>{allLaunches.rocket.rocket_name}</span>
             </div>
              <div className="inner-div-2">
                    <span>{allLaunches.launch_year}</span>
             </div> */}
        </div>)

}
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
);


