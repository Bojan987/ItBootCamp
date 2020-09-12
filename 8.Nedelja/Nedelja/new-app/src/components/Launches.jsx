import React from "react";

export const Launches = ({ filteredLaunches}) => {
    
  return (
    <>
    {filteredLaunches.map((el,ind)=>
        
            <div key={ind} className="launch">
        <div className="inner-div-0">
        <img src={el.links.mission_patch} alt="Missing " />
      </div>
      <div className="inner-div-1">
        <span>{el.rocket.rocket_name}</span>
      </div>
      <div className="inner-div-2">
        <span>{el.launch_year}</span>
      </div>
      
      </div>
    )
      }
    </>
  );
};
