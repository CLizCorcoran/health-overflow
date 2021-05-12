import React, { useState, useEffect } from "react";
import FilterContainer from "../containers/FilterContainer.js";
import '../sass/appsass.scss';


const QuestionDetail = match => {
    const [question, setQuestion] = useState([]);
    const [fetched, setFetched] = useState(false);  

    useEffect(() => {
        //let { id } = useParams();
        let url = "http://localhost:9000/api/questions/" + match.match.params.id;
 
        fetch(url)
            .then(res => res.json())
            .then(response => {
                 setQuestion(response);
                 setFetched(true);
            })
            .catch(error => console.log(error));
    }, [fetched]);

    return (
        <div id="question_detail_page">
            <FilterContainer />            
            <div className="container">
                <h1>{question.title}</h1>
                <p>{question.description}</p>
            </div>
        </div>
    );
};

export default QuestionDetail;