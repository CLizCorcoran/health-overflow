import React, { useState } from "react";
import '../sass/appsass.scss';

const AskQuestion = props => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (evt) => {
        // Does not stop propagation but does stop default behavior.  
        evt.preventDefault();  
        
        const data = {
            title: title,
            description: description,
            category: category
        };

        fetch('http://localhost:9000/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then (response => response.json())
        .then (data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
        alert('Got here!');
    }

    return (
        <div id="ask-container" class="container mt-5">
            <form id="ask-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Ask a question</legend>
                    <div class="form-group pl-3">
                        <label class="col-form-label font-weight-bold" for="title">Title</label>
                        <input class="form-control" type="text" id="title" required value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div class="form-group pl-3">
                        <label class="col-form-label font-weight-bold" for="description">Description</label>
                        <textarea class="form-control" id="description" rows="3" required value={description} onChange={(event) => setDescription(event.target.value)} ></textarea>
                    </div>
                    <div class="form-group pl-3">
                        <label class="col-form-label font-weight-bold" for="category">Category</label>
                        <select class="form-control" id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option>General</option>
                            <option>Food</option>
                            <option>Exercise</option>
                            <option>Supplements</option>
                            <option>Meditation</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AskQuestion;