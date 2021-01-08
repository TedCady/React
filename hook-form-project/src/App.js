import './App.css';
import React, { useState }  from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
const [state, setState] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
  return (
    <div className="App">
    <Form inputs={state} formInputs={setState}/>
    <Results info={state}/>
    </div>
  );
}

export default App;
