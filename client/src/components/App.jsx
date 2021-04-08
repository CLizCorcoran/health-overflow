import React, { useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar";
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
        <header className="App-header">
          <NavBar />
        </header>
        <p>
          API Response: {apiResponse}
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;