import React from "react";
import { NavLink } from "react-router-dom";
import '../css/journal.css';

//---------------------------------------------------------------
// Helper component to render links in the NavBar
//---------------------------------------------------------------
const NavTab = props => {
 
     return (
        <NavLink className="navbar-brand" to={props.to}>
            <i className="fas fa-heartbeat pr-1" title={props.label} />
            {props.label}
        </NavLink>
    );
};

export default NavTab;