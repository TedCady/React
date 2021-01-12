import React, {useState} from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const valFirstName = () => {
        if(firstName.length < 2){return "First name must be at least 2 characters";}
        else{return "";}
    }
    const valLastName = () => {
        if(lastName.length < 2){return "Last name must be at least 2 characters";}
        else{return "";}        
    }
    const valEmail = () => {
        if(email.length < 2){return "Email must be at least 2 characters";}
        else{return "";}        
    }
    const valPassword = () => {
        if(password.length < 8){return "Password must be at least 8 characters";}
        else{return "";}        
    }
    const valConfirmPassword = () => {
        if(password !== confirmPW){return "Passwords must match";}
        else{return "";}        
    }  
    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser)
        setHasBeenSubmitted( true );
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	        return "Thank you for submitting the form!";
	    } else {
            return "Welcome, please submit the form";
        }
    }
    return(
        <div>
        { hasBeenSubmitted ?
        <h3>  Thank you for submitting the form!</h3> : <h3>Welcome, please submit the form</h3>  } 
            <form onSubmit={ createUser }>
                <div>
                    First Name:
                    <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    {valFirstName()}
                    </div>
                    <div>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    {valLastName()}
                    </div>
                    <div>
                    Email:
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    {valEmail()}
                    </div>
                    <div>
                    Password:
                    <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    {valPassword()}
                    </div>
                    <div>Confirm PW:
                    <input type="text" value={confirmPW} onChange={(e)=>{setConfirmPW(e.target.value)}}/>
                    {valConfirmPassword()}
                    </div>
                    <input type="submit" value="Create User" />
            </form>
        </div>
    )
}
export default Form;
