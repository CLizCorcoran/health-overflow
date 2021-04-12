import React from "react";
import { Link } from "react-router-dom";
import '../css/journal.css';
import '../sass/appsass.scss';

var questions = [
    {"id": 1, "question": "Will Vitamin D save my life?", "details": "My doctors has me taking four times the recommended dose.  Can this really be healthy?", "user": "vitahack", "vote": 0, "category": 4},
    {"id": 2, "question": "Could my cell phone kill me?", "details": "It seems like this could be an issue.  Curious if anyone knows of some research around this topic.", "user": "paranoid", "vote": 0, "category": 1},
    {"id": 3, "question": "Is it okay to cleanse your body by fasting from time to time?", "details": "My next door neighbor keeps telling me that I should cleanse my body to remove toxins.  Is this really a thing?", "vote": 0, "category": 2}
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

    return(        
    <div>
        <div className="divStatistics text-muted small pr-2 mb-1" width="50px">
            {props.vote}<br/> Votes
            <br/>
            0<br/> Answers
        </div>
        <div className="question">
            <Link className="strong" to="#">{props.question}</Link><br/>
            <span>{props.details}</span>
        </div>
        <br />
        <hr/>
    </div>

    )
}

function Questions() {    
    
    return (
        <div id="questions" className="container">
            <h3 className="mb-4">All Questions<Link id="btnAsk" className="btn btn-primary" role="button" to="#">Ask Question</Link></h3>
            <hr />
            {questions.map((item, i) => {
                return (
                    <div>
                        <Question question={item.question} details={item.details} user={item.user} vote={item.vote} />
                    </div>
                )
            })}
        </div>
    )
}

export default Questions;