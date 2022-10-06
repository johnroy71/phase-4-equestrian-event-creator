import React from "react";

function Rider({rider}) {
  return (
    
    <div>
        <u>RIDER</u>

        <div>Rider ID: {rider.id}</div>
        <div>Name: {rider.name}</div>
      
        <div>Age: {rider.age}</div>
        
        <div>Skill Level: {rider.skill_level}</div>
    
    </div>
  );
}

export default Rider;
