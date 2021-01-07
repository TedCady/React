// entry point in the src/index.js file int he project folder-----ReactDOM.render
//this is the default React landing page
// when you nav to project and run the following --- npm run start 
// really dont need anything here but hte import statement from react to make the page work with JSX
// create a components folder and in the folder put everything you need for the project to work
// ie App.css; App.js; App.test.js; index.css; index.js; logo.svg(other image references); serviceWorker.js(otherJS filenames go here); setupTests.js(other file names as well)



import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
    </header>
    </div>
);
}
export default App;
