class ToDoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div>
            <h1>ToDoList</h1>
            <h2>Today</h2>
            <Lists tasks = {["walk dog", "workout"]}/>
            <h2>Tomorrow</h2>
            <Lists tasks = {["walk dog", "workout", "make lunch"]}/>
           </div>
        )
    }

    
}

const Lists = (props)=>{
return <p>{props.tasks.join(', ')}</p>

}