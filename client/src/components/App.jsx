import React, { useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import QuestionsContainer from "../containers/QuestionsContainer";
import AskQuestion from "./AskQuestion";
import '../css/journal.css';


function App() {
  const [apiResponse, setResponse] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setResponse(res))
      .catch(err => setResponse(err));
  };

  callAPI();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact from='/' component={Splash} />
          <Route exact from='/users/login' component={Login} />
          <Route exact from="/users/signup" component={Register} />
          <Route exact path="/questions" component={QuestionsContainer} />
          <Route exact path="/questions/ask" component={AskQuestion} />
        </Switch>

        <p>
          API Response: {apiResponse}
        </p>

      </div>
    </BrowserRouter>
  );
}

export default App;