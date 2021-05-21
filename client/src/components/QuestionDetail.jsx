import React, { useState, useEffect } from "react";
import handleErrors from "../constants/errors";
import Filter from "./Filter";
import '../sass/appsass.scss';


//----------------------------------------------------------------
// Renders the detail for a specific question.  
//  Prior to rendering, a fetch call is made to the question 
//  endpoint to get the information.  
//----------------------------------------------------------------
const QuestionDetail = match => {
    const [question, setQuestion] = useState([]);
    const [comments, setComments] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [comment, setComment] = useState("");

    let apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000/';
    
    useEffect(() => {
        //let { id } = useParams();
        let url = `${apiUrl}api/questions/` + match.match.params.id + "/comments";

        fetch(url)
            .then(res => res.json())
            .then(response => {
                setQuestion(response);
                setComments(response.comments);
                setFetched(true);
            })
            .catch(error => console.log(error));
    }, [match.match.params.id, fetched, apiUrl]);


    const handleSubmit = (evt) => {
        // Does not stop propagation but does stop default behavior.  
        evt.preventDefault();

        let url = apiUrl + "api/questions/" + question.id + "/comments?secret_token=" + match.user.token;

        const data = {
            text: comment
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(data => {
                setComment("");
                setFetched(false);
                console.log('Success:', data);
            })
            .catch((error) => {
                match.onError("Error", error.message);
                console.error('Error:', error);
            });

    };

    let commentHeader = comments.length + " Comment";

    if (comments.length !== 1)
        commentHeader += "s";

    let commentForm = null;
    if (match.user)
        commentForm = (
            <form id="comment-form" onSubmit={handleSubmit} >
                <fieldset>
                    <div className="form-group">
                        <textarea className="form-control" id="comment" rows="3" required value={comment} onChange={(event) => setComment(event.target.value)} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Comment</button>
                </fieldset>
            </form >
        );

    return (
        <div id="question_detail_page" className="container-fluid">
            <Filter />
            <div id="question_detail">
                <h3 className="mb-4">{question.title}</h3>
                <p>{question.description}</p>
                { commentForm }
                <div id="comments">
                    <h5 className="mt-5">{commentHeader}</h5>
                    {comments.map((item, i) => {
                        return (
                            // Keys do not get passed to the component.  Use id for access.  
                            <div key={item.id}>
                                <hr />
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default QuestionDetail;