import React from "react";
import { NavLink } from "react-router-dom";
import '../sass/appsass.scss';

//----------------------------------------------------------------
// Implements the Filter button functionality
//  When the filter button is pressed, the page navigates to
//  /questions?<category>
//  (Unless the filter is all, then just /questions)
//----------------------------------------------------------------
const FilterButton = props => {

    let link = "/questions";
    if (props.id !== "all")
        link += "?" + props.id;

    var styleClass = "btn btn-secondary mb-1";
    //if (props.filter === props.id)
    //    styleClass += " active"; 

    return (
        <NavLink exact type="button" className={ styleClass } role="button" to={link} isActive={(match, location) => {
            if (!location) {
              return false;
            }

            const query = (props.id === "all") ? "" : "?" + props.id;
            if (location.pathname === "/questions" && location.search === query)
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
            <FilterButton label="Meditation" id="meditation"  onChange={() => props.onFilter("meditation") } />
            <FilterButton label="Supplements" id="supplements"  onChange={() => props.onFilter("supplements") } />
        </div>
    );
}

export default Filter;