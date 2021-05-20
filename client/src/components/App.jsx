import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBarContainer from "../containers/NavBarContainer";
import Splash from "./Splash";
import LoginContainer from "../containers/LoginContainer";
import ErrorContainer from "../containers/ErrorContainer";
import RegisterContainer from "../containers/RegisterContainer";
import QuestionsContainer from "../containers/QuestionsContainer";
import AskQuestionContainer from "../containers/AskQuestionContainer";
import QuestionDetailContainer from "../containers/QuestionDetailContainer";
import '../css/journal.css';


function App() {
  const [apiResponse, setResponse] = useState("");

  let apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000/';
  
  function callAPI() {
    fetch(`${apiUrl}testAPI`)
      .then(res => res.text())
      .then(res => setResponse(res))
      .catch(err => setResponse(err));
  };

  callAPI();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBarContainer />
        <ErrorContainer />

        <Switch>
          <Route exact from='/' component={Splash} />
          <Route exact from='/users/login' component={LoginContainer} />
          <Route exact from="/users/signup" component={RegisterContainer} />
          <Route exact path="/questions/ask" component={AskQuestionContainer} />
          <Route exact path="/questions/:id" component={QuestionDetailContainer} />
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