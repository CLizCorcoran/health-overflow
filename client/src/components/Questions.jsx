import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import '../sass/appsass.scss';


//----------------------------------------------------------------
// Renders the summary information for a particular question
//----------------------------------------------------------------
const Question = props => {

    const chopLen = 100;

    let details = "";
    if (props.question.description.length <= chopLen)
        details = props.question.description;
    else {
        let spaceIdx = props.question.description.indexOf(" ", chopLen);
        details = props.question.description.slice(0, spaceIdx);
        if (details.length !== props.question.description.length)
            details += "...";
    }

    let commentTxt = "Comment";
    if (props.question.commentCount !== 1)
        commentTxt += "s";

    const questionLink = "/questions/" + props.question.id;

    return (
        <div id="question-div">
            <div className="divStatistics text-muted small mr-3 pt-2 mb-1" width="50px">
            {props.question.commentCount}<br /> { commentTxt }
            </div>
            <div className="question">
                <Link className="strong" to={questionLink}>{props.question.title}</Link><br />
                <span>{details}</span>
            </div>
            <br />
            <hr />
        </div>

    )
}

//----------------------------------------------------------------
// Renders the list of questions pertaining to the currently 
//  applied category.  
//
// Prior to rendering, the questions are fetched from the server.
//----------------------------------------------------------------
const Questions = props => {
    // Supports paging (not using yet) but also keeps the fetch from
    //  happening over and over and over again.  
    //const [page, setPage] = useState(1);
    const [stuff, setStuff] = useState([]);
    const [filter, setFilter] = useState("all");

    let apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000/';

    useEffect(() => {

        let filter = "";
        let url = `${apiUrl}api/questions/`;
        if (props.location.search) {
            filter = props.location.search.slice(1);
        }
        if (filter !== "" && filter !== "all")
            url += "?category=" + filter;

        setFilter(filter);

        fetch(url)
            .then(res => res.json())
            .then(response => {
                console.log("Setting stuff");
                setStuff(response);
                setFilter(filter);
            })
            .catch(error => console.log(error));
    }, [props.location.search, apiUrl]);

    // Build the header tag.
    let header = "All Questions";
    if (filter !== "")
        header = "Questions (" + filter + ")";

    // Build the ask question button - if user is logged in.
    let askQuestion = null;
    if (props.user)
        askQuestion = <Link id="btnAsk" className="btn btn-primary mt-2" role="button" to="/questions/ask">Ask Question</Link>;


    return (
        <div id="questions_page" className="container-fluid">
            <Filter />
            <div id="questions">
                <div id="question-header">
                    <p className="mb-0 mt-2">{header}</p>
                    {askQuestion}
                </div>
                <hr />
                {stuff.map((item, i) => {
                    return (
                        // Keys do not get passed to the component.  Use id for access. 
                        <div key={item.id} > 
                            <Question question={item} />
                            <hr />
                        </div>
                       
                    )
                })}
            </div>
        </div>
    )
}

export default Questions;