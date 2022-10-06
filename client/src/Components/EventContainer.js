import React, {useState, useEffect} from "react";
import Event from "./Event"


function EventContainer({eventsList}) {




  return (
    <div>
    
 {eventsList.map(event => <Event event={event}key = {event.id}/> )}

    </div>
  );
}

export default EventContainer;