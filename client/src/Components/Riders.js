import React, { useState, useEffect } from "react"

import RiderContainer from "./RiderContainer"


function Rider ({ rider, setRider }) {

    const [ridersList, setRidersList] = useState([])


    useEffect(() => {
      fetch ('/riders')
      .then (resp => resp.json())
      .then (data => setRidersList(data))
    
    }, [])

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [skill_level, setSkillLevel] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    
            fetch("/riders", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name, age, skill_level})
        })
            .then(resp => resp.json())
            .then(data => setRider(data))
            alert("Riders Have Been Updated!")
            window.location.reload()
            
    }

    return (
     <div> 
        
        <p>Create a new rider in this form. You must include a name, age and skill level.</p>
    
        
       <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                <label htmlFor="age">Age</label>
                <input
                    type="integer"
                    id="age"
                    autoComplete="current-off"
                    value={age}
                    onChange = {(e) => setAge(e.target.value)}
                />
                <label htmlFor="skill_level">Skill Level</label>
                <input
                    type="integer"
                    id="skill_level"
                    autoComplete="current-off"
                    value={skill_level}
                    onChange = {(e) => setSkillLevel(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Create Rider
                </button>
                
        </form>
       <br></br>
      
        <div>
            <RiderContainer ridersList = {ridersList} />
        </div>

        </div>  )
}
export default Rider