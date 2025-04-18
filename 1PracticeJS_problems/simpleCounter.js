class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        })

        )
    }
    decrement(){
        this.setState(prevState => ({
            count: prevState.count - 1
        })

        )
    }
    reset(){
        this.setState(prevState => ({
            count: prevState.count = 0
        })

        )
    }

    render(){
        return(
            <div>
                <button className= "inc" onClick ={this.increment}>
                    Increment
                </button>
                <button className= "dec" onClick ={this.decrement}>
                    Increment
                </button>
                <button className= "res" onClick ={this.reset}>
                    Reset
                </button>
                <h1>Current Count{this.state.count}</h1>
            </div>
        );
    }
}