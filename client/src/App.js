
import Nav from "./Components/Nav"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Riders from "./Components/Riders"
import Horses from "./Components/Horses"
import Events from "./Components/Events"



import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);
  const [rider, setRider] = useState(null);
  const [event, setEvent] = useState(null);
  const [horse, setHorse] = useState(null);
  
  return (

    <div>
    <Nav/>
    <Switch>
        <Route exact path="/">
          <h1>Home</h1>  
          <h2>Shady Acres Stables and Adhesives</h2>  
          <h3>Shady Acres is an OK equestrian stables and a top-flight manufacturer of artisinal hide-based glues.</h3>     
        </Route>
        <Route exact path="/horses">
          <h1>Horses</h1>
          <Horses horse = {horse} setHorse={setHorse} />
        </Route>
        <Route exact path="/riders">
          <h1>Riders</h1>
          <Riders rider = {rider} setRider={setRider} />
          </Route>
          <Route exact path="/events">
            <h1>Events</h1>
            <Events event = {event} setEvent={setEvent} />
          </Route>
          <Route exact path="/login">
            <h1>Log In</h1>
            <Login user = {user} setUser = {setUser} />
          </Route>
          <Route exact path="/signup">
            <h1>Sign Up</h1>
            <Signup user = {user} setUser = {setUser} />
          </Route>
      </Switch>
    </div>














)}

export default App;
