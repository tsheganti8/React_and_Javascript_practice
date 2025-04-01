const Items=(props)=>{
    return <h1>Current Quantity of Items in Carts: {props.quantity}</h1>
}

Items.defaultProps = {quantity: 0};

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Items  quantity = {100}/>
    
    }
};