import React, {useState, useEffect} from "react";
import Horse from "./Horse"


function HorseContainer({horsesList}) {

console.log(horsesList)


  return (
    <div>
    
 {horsesList.map(horse => <Horse horse={horse} key = {horse.id}/> )}

    </div>
  );
}

export default HorseContainer;