import React from "react";
import "./App.css";
import MyNewComponent from "./components/MyNewComponent";

function App() {
    return (
    <div className="App">
        <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
                    <p>This is another child</p>
                    <p>This is even another child</p>
        </MyNewComponent>
    </div>
    );
}

export default App;


// access the kid this way in the components.js folder

import React, { Component } from 'react';
    
    
class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
        );
    }
}
    
export default MyNewComponent;
