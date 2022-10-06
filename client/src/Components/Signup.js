import React, { useState } from "react"


function Signup ({ user, setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password})
        })
            .then(resp => resp.json())
            .then(data => setUser(data))
    }


    return (
    <div>
        <p>If you do not have an account, you can sign up here. You must use a unique username!</p>


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
                <button variant="fill" color="primary" type="submit">Create
                </button>
        </form>
        </div>  )
}
export default Signup