// Events that happen are called "Synthetic Events", they are camelCased not lowercase
// Returning false will not work with any event to prevent bubbling. You will need to manually call event.stopPropagation() or event.preventDefault()as necessary.
// Events cannot be called asynchronously because of how React "pools" the Synthetic events


import React from 'react';
import logo from './logo.svg';
import './App.css';
    
    
function App() {
    return (
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    );
}
    
export default App;


//  events that get used often are as follow:
// onClick- when a button is clicked
// onChange - an event that runs when a form input is changed
// onSubmit - an event that runs when a form is submitted
// onFocus - an event that is run when an element is given focus (clicked on or tabbed to)
// onBlur - - an event that is run when an element loses focus (the user clicked away)