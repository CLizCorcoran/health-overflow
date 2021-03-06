import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import '../sass/appsass.scss';

//----------------------------------------------------------------
// Renders the form for login.  
//  When the user presses the 'Log in' button, makes the server
//  endpoint call to log in.  
//  Any errors are communicated to the user through a dialog.
//  Upon successful log in, the user is redirected to the all
//  questions page.
//----------------------------------------------------------------
const Login = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    let apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000/';

    const handleSubmit = (evt) => {
        // Does not stop propagation but does stop default behavior.  
        evt.preventDefault();

        const data = {
            username: username,
            password: password
        };

        fetch(`${apiUrl}api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "error") {
                    props.onError("Login Error", data.message);
                    console.log('Login error:  ', data.message);
                }
                else {
                    props.onLogin(username, data.token);
                    setLoggedIn(true);
                    console.log('Login successful!');
                }
 
            })
            .catch((error) => {
                props.onError("Login Error", error.message);
                console.error('Error:', error);
            });

        setUsername("");
        setPassword("");
    };

    if (loggedIn) {
        return <Redirect to="/questions" />;
    }

    return (
        <div className="container-fluid login-container">
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