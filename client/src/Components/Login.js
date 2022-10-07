import React, { useState } from "react"


function Login ({ user, setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password})
        })
            .then(resp => resp.json())
            .then(data => setUser(data))
    }

    function handleLogout() {
        fetch("/logout", {
        method: "DELETE",
        headers: {"Content-Type" : "application/json"},
        
        })
        .then (setUser(null))
    }


    return (
     <div> 
        <p>Existing users can log on and log off here.</p>
       <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Login
                </button>
                <button variant="fill" color="red" onClick={handleLogout}>Logout</button>
        </form>

        </div>  )
}
export default Login