import React, { useState, useEffect } from "react"

import EventContainer from "./EventContainer"


function Event ({ event, setEvent }) {

    const [eventsList, setEventsList] = useState([])


    useEffect(() => {
      fetch ('/events_show')
      .then (resp => resp.json())
      .then (data => setEventsList(data))
    
    }, [])


    const [name, setName] = useState("")
    const [horse_id, setHorseId] = useState("")
    const [rider_id, setRiderId] = useState("")
    const [eventId, setEventId] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    
            fetch("/event_create", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name, horse_id, rider_id})
        })
            .then(resp => resp.json())
            .then(data => setEvent(data))
              
    }

    const handleUpdate = (e) => {
        e.preventDefault()
    
            fetch("/event_create", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name, horse_id, rider_id})
        })
            .then(resp => resp.json())
            .then(data => setEvent(data))
              
    }

    return (
     <div> 
        
        <p>Create a new Event in this form. You must include a name, a valid Horse ID and a valid Rider ID.</p>
    
        
       <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input
                    type="text"
                    id="event_id"
                    autoComplete="off"
                    value={name}
                    onChange = {(e) => setEventId(e.target.value)}
                    />
                <label htmlFor="age">Horse ID</label>
                <input
                    type="integer"
                    id="horse_id"
                    autoComplete="current-off"
                    value={horse_id}
                    onChange = {(e) => setHorseId(e.target.value)}
                />
                <label htmlFor="skill_level">Rider ID</label>
                <input
                    type="integer"
                    id="training_level"
                    autoComplete="current-off"
                    value={rider_id}
                    onChange = {(e) => setRiderId(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Create Event
                </button>
                
        </form>
        <p></p>
        <p></p>
        Update an existing event using this form. You must include the Event ID in addition to all other fields.
        <form onSubmit={handleUpdate}>
        <label htmlFor="id">Event ID</label>
                <input
                    type="integer"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange = {(e) => setEventId(e.target.value)}
                    />
                <label htmlFor="Name">Name</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                <label htmlFor="age">Horse ID</label>
                <input
                    type="integer"
                    id="horse_id"
                    autoComplete="current-off"
                    value={horse_id}
                    onChange = {(e) => setHorseId(e.target.value)}
                />
                <label htmlFor="skill_level">Rider ID</label>
                <input
                    type="integer"
                    id="training_level"
                    autoComplete="current-off"
                    value={rider_id}
                    onChange = {(e) => setRiderId(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Update Event
                </button>
        

        </form>
       <br></br>
       <div>
            <EventContainer eventsList = {eventsList} />
        </div>

        </div>  )
}
export default Event