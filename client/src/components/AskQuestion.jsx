import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import handleErrors from "../constants/errors";
import '../sass/appsass.scss';

const AskQuestion = props => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    let apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000/';

    const handleSubmit = (evt) => {
        // Does not stop propagation but does stop default behavior.  
        evt.preventDefault();  
        
        const data = {
            title: title,
            description: description,
            category: category
        };

        let url = apiUrl + 'api/questions?secret_token=' + props.user.token;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(handleErrors)
        .then(response => {
            console.log("Response:", response);
            response.json()
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            props.onError("Error", error.message);
            console.error('Error:', error);
        });
    }

    if (props.user == null) {
        props.onError("Error", "You must be logged in to ask a question.");
        return <Redirect to="/users/login" />;
    }
        

    return (
        <div id="ask-container" className="container mt-5">
            <form id="ask-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Ask a question</legend>
                    <div className="form-group pl-3">
                        <label className="col-form-label font-weight-bold" htmlFor="title">Title</label>
                        <input className="form-control" type="text" id="title" required value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className="form-group pl-3">
                        <label className="col-form-label font-weight-bold" htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="3" required value={description} onChange={(event) => setDescription(event.target.value)} ></textarea>
                    </div>
                    <div className="form-group pl-3">
                        <label className="col-form-label font-weight-bold" htmlFor="category">Category</label>
                        <select className="form-control" id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option>General</option>
                            <option>Food</option>
                            <option>Exercise</option>
                            <option>Supplements</option>
                            <option>Meditation</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AskQuestion;