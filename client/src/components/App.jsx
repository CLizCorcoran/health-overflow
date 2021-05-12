import React, { useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBarContainer from "../containers/NavBarContainer";
import Splash from "./Splash";
import LoginContainer from "../containers/LoginContainer";
import Register from "./Register";
import QuestionsContainer from "../containers/QuestionsContainer";
import AskQuestion from "./AskQuestion";
import QuestionDetail from "./QuestionDetail";
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
        <NavBarContainer />

        <Switch>
          <Route exact from='/' component={Splash} />
          <Route exact from='/users/login' component={LoginContainer} />
          <Route exact from="/users/signup" component={Register} />
          <Route exact path="/questions/ask" component={AskQuestion} />
          <Route exact path="/questions/:id" component={QuestionDetail} />
          <Route path="/questions" component={QuestionsContainer} />
        </Switch>

        <p>
          API Response: {apiResponse}
        </p>

      </div>
    </BrowserRouter>
  );
}

export default App;