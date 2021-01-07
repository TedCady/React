import React, {Component} from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state={age: this.props.age}
        };
    render() {
        const {firstName, lastName} = this.props;
        const ageIncrease = () => {
            console.log("**********")
            this.setState({age: this.state.age + 1});
            }
        const ageDecrease = () => {
            console.log("**********")
            this.setState({age: this.state.age - 1});
            }
            return (
                <div>          
                    <h1>
                        {this.props.header} {this.props.someText}{lastName}, {firstName}
                    </h1>
                        <p>Age: {this.state.age}</p>
                        <p>Hair Color: {this.props.hairColor}</p>
                        <button onClick= {ageIncrease}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                        <button onClick= {ageDecrease}>Age of Youth Button for {this.props.firstName} {this.props.lastName}</button>
                </div>
                
        );
    }
} 

export default Person;

