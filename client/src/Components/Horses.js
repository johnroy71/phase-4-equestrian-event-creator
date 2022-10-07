import React, { useState, useEffect } from "react"

import HorseContainer from "./HorseContainer"


function Horse ({ horse, setHorse }) {

    const [horsesList, setHorsesList] = useState([])


    useEffect(() => {
      fetch ('/horses')
      .then (resp => resp.json())
      .then (data => setHorsesList(data))
    
    }, [])

// console.log(ridersList)
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [training_level, setTrainingLevel] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    
            fetch("/horses", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name, breed, training_level})
        })
            .then(resp => resp.json())
            .then(data => setHorse(data))

        
            alert("Horses Have Been Updated!")
      window.location.reload()
            
            
    }

    return (
     <div> 
        
        <p>Create a new Horse in this form. You must include a name, breed and training level.</p>
    
        
       <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                <label htmlFor="age">Breed</label>
                <input
                    type="string"
                    id="age"
                    autoComplete="current-off"
                    value={breed}
                    onChange = {(e) => setBreed(e.target.value)}
                />
                <label htmlFor="skill_level">Skill Level</label>
                <input
                    type="integer"
                    id="skill_level"
                    autoComplete="current-off"
                    value={training_level}
                    onChange = {(e) => setTrainingLevel(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Create Horse
                </button>
                
        </form>
       <br></br>
       <div>
            <HorseContainer horsesList = {horsesList} />
        </div>

        </div>  )
}
export default Horse