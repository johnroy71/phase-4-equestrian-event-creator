import React from 'react'
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <NavLink exact to="/">
            Home
            </NavLink>
            <NavLink exact to="/riders">
                Riders
            </NavLink>
            <NavLink exact to="/horses">
                Horses
            </NavLink>
            <NavLink exact to="/events">
                Events
            </NavLink>
            <NavLink exact to="/login">
                Login
            </NavLink>
            <NavLink exact to="/signup">
                Sign Up
            </NavLink>
        </nav>
    )
}
export default Nav;