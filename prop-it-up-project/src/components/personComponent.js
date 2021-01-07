import React, {Component} from 'react';

class Person extends Component {
    render() {
        const { firstName, lastName} = this.props;
            return (
                <div>          
                    <h1>{this.props.someText}{lastName}, {firstName}</h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                </div>
                
        );
    }
}
export default Person;