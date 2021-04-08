import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const [apiResponse, setResponse] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then( res => res.text() )
      .then( res => setResponse( res ))
      .catch(err => setResponse(err));
  };

  callAPI();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          API Response: {apiResponse}
        </p>
       </header>
    </div>
  );
}

export default App;