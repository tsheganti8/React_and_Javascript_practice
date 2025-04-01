const ShoppingCart =(props)=> {
        return(
            <div>
                <h1>Shopping Cart Components</h1>
                <p>
                Items{props.items}
                </p>
                </div>
        );
};

ShoppingCart.defaultProps = {items: 0};

class Shopping extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <p>
            <ShoppingCart />
            </p>
            </div>
        );
    }
}