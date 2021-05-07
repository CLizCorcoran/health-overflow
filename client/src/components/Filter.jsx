import React from "react";
import '../sass/appsass.scss';

//-----------------------------------------------
// Implements the Filter button functionality
//-----------------------------------------------
const FilterButton = props => {

    var styleClass = "btn btn-secondary mb-1";
    if (props.active)
        styleClass += " active";


    return (
        <button type="button" className={ styleClass } onClick={props.onChange} >
            {props.label}
        </button>
    );
}


const Filter = props => {
    //props.onFilter("food");

    return (
        <div id="filter_div" className="btn-group-vertical">
            <FilterButton label="All" id="all" active={props.filter === "all"} onChange={() => props.onFilter("all") } />
            <FilterButton label="Food" id="food" active={props.filter === "food"} onChange={() => props.onFilter("food") } />
            <FilterButton label="Exercise" id="exercise" active={props.filter === "exercise"} onChange={() => props.onFilter("exercise") } />
            <FilterButton label="Mediation" id="meditation" active={props.filter === "mediation"} onChange={() => props.onFilter("mediation") } />
            <FilterButton label="Supplements" id="supplements" active={props.filter === "supplements"} onChange={() => props.onFilter("supplements") } />
        </div>
    );
}

export default Filter;