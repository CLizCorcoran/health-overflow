import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import '../sass/appsass.scss';


const Register = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    const handleSubmit = (evt) => {
        // Does not stop propagation but does stop default behavior.  
        evt.preventDefault();

        const data = {
            username: username,
            password: password,
            email: email
        };

        fetch('http://localhost:9000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                    props.onLogin(username);
                    setLoggedIn(true);
                    console.log('Login successful!');
                }
            })
            .catch((error) => {
                props.onError("Login Error", error.message);
                console.error('Error:', error);
            });

        alert('Got here!');
    }

    // If logged in, go ahead and redirect to the main page.  
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
                    <div className="form-group">
                        <label className="col-form-label font-weight-bold" htmlFor="email">Email</label>
                        <input className="form-control" type="email" id="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Sign up</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;