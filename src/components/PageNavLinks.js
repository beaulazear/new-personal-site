import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

export default function PageNavLinks() {

    return (
        <div className="navigation">
            <NavLink to="/" className="navButtons">Home</NavLink>
            <NavLink to="/animal_care" className="navButtons">Pet Care</NavLink>
            <NavLink to="/programming" className="navButtons">Code</NavLink>
            <NavLink to="/resume" className="navButtons">Resume</NavLink>
        </div>
    )
}