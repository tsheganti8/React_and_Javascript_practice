const Items = (props) =>{
 return <h1>current quantity of Items in cart: {props.quantity}</h1>
};

Items.propTypes = {
    quantity: PropTypes.number.isRequired
}

Items.defaultProps = {Items: 0};

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Items />
    }
}