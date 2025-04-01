class Stateful extends React.Component {
    contructor(props){
        super(props);

        this.state = {
            firstName: "Nish"
        };

    }

    render(){
        return(
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }

}