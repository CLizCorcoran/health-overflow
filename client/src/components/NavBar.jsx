import React from "react";
import { Link } from "react-router-dom";
import NavTab from "./NavTab";
//import logo from "./img/todoblue.png";

import '../css/journal.css';

//---------------------------------------------------------------
// The rendering and implementation of the Navigation bar.
//
// The child component, NabTab is used for the List List link
//  as well as for the Contact link.
//---------------------------------------------------------------
const NavBar = () => {

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavTab to="/" label="Health Overflow" />
   
            <div id="login">
                <Link role="button" className="btn btn-primary mr-1 my-2 my-sm-0" to="/users/login">Log in</Link>  
                <Link role="button" className="btn btn-secondary my-2 my-sm-0" to="/users/signup">Sign up</Link>  
            </div>

        </div>
    );
};

export default NavBar;