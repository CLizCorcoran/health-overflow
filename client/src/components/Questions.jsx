import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterContainer from "../containers/FilterContainer.js";
//import '../css/journal.css';
import '../sass/appsass.scss';

var questions = [
    { "id": 1, "question": "Will Vitamin D save my life?", "details": "My doctors has me taking four times the recommended dose.  Can this really be healthy?", "user": "vitahack", "vote": 0, "category": 4 },
    { "id": 2, "question": "Could my cell phone kill me?", "details": "It seems like this could be an issue.  Curious if anyone knows of some research around this topic.", "user": "paranoid", "vote": 0, "category": 1 },
    { "id": 3, "question": "Is it okay to cleanse your body by fasting from time to time?", "details": "My next door neighbor keeps telling me that I should cleanse my body to remove toxins.  Is this really a thing?", "vote": 0, "category": 2 }
];

/*------------- Save for later ------------------
        <div>
            <div className="divVote" width="50px">
                <i className="fas fa-sort-up" title="Vote up" />
                <div>{props.vote}</div>
                <i className="fas fa-sort-down" title="Vote up" />
            </div>
            <div className="question">
                {props.question}
            </div>
            <br />
        </div>
-------------------------------------------------------------*/


const Question = props => {

    return (
        <div>
            <div className="divStatistics text-muted small pr-2 mb-1" width="50px">
                0<br /> Votes
            <br />
            0<br /> Answers
            </div>
            <div className="question">
                <Link className="strong" to="#">{props.question}</Link><br />
                <span>{props.details}</span>
            </div>
            <br />
            <hr />
        </div>

    )
}

const Questions = props => {
    // Supports paging (not using yet) but also keeps the fetch from
    //  happening over and over and over again.  
    const [page, setPage] = useState(1);
    const [stuff, setStuff] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/api/questions/")
            .then(res => res.json())
            .then(response => {
                console.log("Setting stuff");
                setStuff(response);
            })
            .catch(error => console.log(error));
    }, [page]);

    let header = "All Questions";
    if (props.filter != "all")
        header = "Questions (" + props.filter + ")";


    return (
        <div id="questions_page">
            <FilterContainer />
            <div id="questions" className="container">
                <h3 className="mb-4">{header}<Link id="btnAsk" className="btn btn-primary" role="button" to="#">Ask Question</Link></h3>
                <hr />
                {stuff.map((item, i) => {
                    return (
                        <Question key={i} question={item.title} details={item.description} />
                       
                    )
                })}
            </div>
        </div>
    )
}

export default Questions;