import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import '../sass/appsass.scss';


const Login = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


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
            .then(response => response.json())
            .then(data => {
                props.onLogin(username);
                setLoggedIn(true);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setUsername("");
        setPassword("");
    };

    if (loggedIn) {
        return <Redirect to="/questions" />;
    }

    return (
        <div id="login-container" className="container-fluid">
            <h1 className="text-center mt-4 mb-5"><i className="fas fa-heartbeat mr-2" title="Health Overflow" />Health Overflow</h1>
            <form id="login-form" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-group">
                        <label className="col-form-label font-weight-bold" htmlFor="username">Username</label>
                        <input className="form-control" type="text" id="username" required value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label font-weight-bold" htmlFor="password">Password</label>
                        <input className="form-control" type="password" id="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;