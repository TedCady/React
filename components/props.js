class Header extends React.Component {
    render() {
        return (
        <div>
                        // By inheriting from React.Component all we need is the
        "this" keyword in front of props.          
            <h1>
                My name is {this.props.firstName} {this.props.lastName}
            </h1>
                
        </div>
        );
    }
}

// the model below is destructuring.

class Header extends React.Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
                       // Destructuring allows us to use them like variables. This is
                just a small amount of syntactical sugar.          
                <h1>
                    My name is {firstName} {lastName}
                </h1>
                
            </div>
    );
    }
}



