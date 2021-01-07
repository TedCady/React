// JSX(JS XML) extension that allows us to write code that resembles HTML without having to make it a string
// notice the APP and the method render()
// we can use syntax we are familiar with already
//ie table, ul, li, form, input, img among others
// Rules: Not able to put whatever we want though. We do have limitations. 



class App extends Component {    
        render() {        
            return (            
                <h1>Hello World</h1>        
            );    
        }
    }


    // Consider the following 

    class App extends Component {    
            render(){
                return (            
                    <h1>Hello World</h1>            
                    <p>This is a paragraph</p>        
                );    
            }
        }

// The above will fail due to being outside only one element of JSX. Whne using JSX style syntax, make sure to put everything inside one tag.
// Example of failed message below

./src/App.js  
    Line 6:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

//making use of one tag (like a div) or using one element like below

class App extends Component {    
        render(){        
            return (            
                <>                
                    <h1>Hello World</h1>                
                    <p>This is a paragraph</p>            
                </>        
            );    
        }
    }

    //JSX versions of certain HTML attributes;

    <h1 class="my-class">This is HTML</h1>

// This is something what the above might look like with JSX

    class App extends Component {    
            render() {        
                return (            
                    <h1 class="my-class">This is JSX</h1>        
                );    
            }
        }

// But notice on line 1 and 4 of the code....we will get an error for being too ambiguous

// Warning: Invalid DOM property `class`. Did you mean `className`?    
 //   in h1 (at App.js:5)    
//    in App (at src/index.js:6)

// When using HTMl class we will need to instead use the className attribute

class App extends Component {    
        render() {        
            return (            
                <h1 className="my-class">This is JSX</h1>        
            );    
        }
    }


    // form example below

    <form action="/process" method="post">    
    <div class="form-group">        
        <label for="email">Email:</label>        
        <input type="text" id="email" name="username" class="form-control" />    
    <div>
</form>

{/* line 3 is using the JS version of 'for' and we need it to read the HTML version...*/}

class App extends Component {    
    render() {        
        return (            
            <form action="/process" method="post">                
                <div class="form-group">                    
                    <label htmlFor="email">Email:</label>                    
                    <input type="text" id="email" name="username" class="form-control" />                
                <div>            
            </form>        
        );    
    }
}

{/* notice the difference in the 'for' from HTML and the 'htmlFor' here....this is how the computer knows to handle that statement as an HTML and not JS */}