import React from "react";

function Event({event}) {
  return (
    
    <div>
        <u>EVENT</u>
        <div>Event ID: {event.id}</div>
        <div>Name: {event.name}</div>
      
        <div>Horse ID: {event.horse_id}</div>
        
        <div>Rider ID: {event.rider_id}</div>
    
    </div>
  );
}

export default Event;
