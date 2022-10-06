import React from "react";

function Horse({horse}) {
  return (
    
    <div>
        <u>HORSE</u>
        <div>Horse ID: {horse.id}</div>
        <div>Name: {horse.name}</div>
      
        <div>Age: {horse.breed}</div>
        
        <div>Skill Level: {horse.training_level}</div>
    
    </div>
  );
}

export default Horse;
