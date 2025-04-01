/*
Render an instance of the Welcome component in the parent component App. 
Here, give Welcome a prop of name and assign it a value of a string. 
Within the child, Welcome, access the name prop within the strong tags. */


class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Welcome name = {"Nish"}/>
            </div>
        );
    }
}




class Welcome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Hello
               <p>Hello, <strong>{this.props.name} </strong>!</p> 
                
            </div>
        );
    }

}