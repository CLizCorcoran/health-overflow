import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../sass/appsass.scss';

//-----------------------------------------------
// Implements the Filter button functionality
//-----------------------------------------------
const FilterButton = props => {

    let link = "/questions?" + props.id;

    var styleClass = "btn btn-secondary mb-1";
    //if (props.filter === props.id)
    //    styleClass += " active"; 

    return (
        <NavLink exact type="button" className={ styleClass } role="button" to={link} isActive={(match, location) => {
            if (!location) {
              return false;
            }

            const query = "?" + props.id;
            if (location.search == query)
                return true;

            return false;        
          }}>{props.label}</NavLink>
    );
}


const Filter = props => {
    //props.onFilter("food");

    return (
        <div id="filter_div" className="btn-group-vertical">
            <FilterButton label="All" id="all"  onChange={() => props.onFilter("all") } />
            <FilterButton label="Food" id="food"  onChange={() => props.onFilter("food") } />
            <FilterButton label="Exercise" id="exercise"  onChange={() => props.onFilter("exercise") } />
            <FilterButton label="Mediation" id="meditation"  onChange={() => props.onFilter("mediation") } />
            <FilterButton label="Supplements" id="supplements"  onChange={() => props.onFilter("supplements") } />
        </div>
    );
}

export default Filter;