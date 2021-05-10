import React, { useState } from "react";
import '../sass/appsass.scss';


const Login = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = (evt) => {
        // Does not stop propagation but does stop default behavior.  
        evt.preventDefault();  

        const data = {
            username: username,
            password: password 
        };
 
        fetch('http://localhost:9000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
        <div id="login-container" className="container mt-5">
        <form id="login-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Log In</legend>
                <div className="form-group pl-3">
                    <label className="col-form-label font-weight-bold" htmlFor="username">Username</label>
                    <input className="form-control" type="text" id="username" required value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="form-group pl-3">
                    <label className="col-form-label font-weight-bold" htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" required value={password} onChange={(event) => setPassword(event.target.value)}/>
               </div>
               <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </fieldset>
        </form>
    </div>
    );
};

export default Login;