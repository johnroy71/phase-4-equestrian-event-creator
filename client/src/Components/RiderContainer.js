import React, {useState, useEffect} from "react";
import Rider from "./Rider"


function RiderContainer({ridersList}) {

console.log(ridersList)


  return (
    <div>
    
 {ridersList.map(rider => <Rider rider={rider}key = {rider.id}/> )}

    </div>
  );
}

export default RiderContainer;