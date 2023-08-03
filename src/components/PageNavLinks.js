import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

export default function PageNavLinks() {

    return (
        <div className="navigation">
            <NavLink to="new-personal-site/" className="navButtons">Home</NavLink>
            <NavLink to="new-personal-site/animal_care" className="navButtons">Animal Care</NavLink>
            <NavLink to="new-personal-site/programming" className="navButtons">Programming</NavLink>
            <NavLink to="new-personal-site/resume" className="navButtons">Resume</NavLink>
        </div>
    )
}