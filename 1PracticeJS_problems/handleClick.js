class MyComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'Initial State' 
       
        }
    }
    handleClick(){
        this.setState({
            name: 'React Rocks!'
        })
    }

    
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click Button</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }


};