import React from "react";

function Event({event}) {

  const handleDelete = () => {
    
    fetch(`/events/${event.id}`, {
        method: "DELETE",
    }


).then(alert("Events Have Been Updated!"))
.then (window.location.reload())}



  return (
    
    <div>
        <u>EVENT</u>
        <div>Event ID: {event.id}</div>
        <div>Name: {event.name}</div>
      
        <div>Horse ID: {event.horse_id}</div>
        
        <div>Rider ID: {event.rider_id}</div>

        <button onClick={handleDelete}>Delete Event</button>
    
    </div>
  );
}

export default Event;
