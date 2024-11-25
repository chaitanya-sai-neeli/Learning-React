import React from "react";
class UserClass2 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0
        }   
        console.log(this.props.name+ " Child Constructor");
    }

    componentDidMount(){
        console.log(this.props.name+" Child comp Mounted");
    }

    render(){
        const {name, place} = this.props
        console.log(this.props.name+  " Child render");
        return (
            <div className = "user-card">
                <h2>{name}</h2>
                <h3>{place}</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick = {() => {
                    this.setState(
                        // (prevState)=>({count : prevState.count + 1})   //Arrow function syntax
                        // function(prevState){
                        //     return {count: prevState.count + 1};      //Normal function syntax returning the object not just value or expression
                        // }
                        {count: this.state.count + 1}
                    )
                }}>Increment</button>
                <h4>Phone: 7780558397</h4>
            </div>
        )
    }
}

export default UserClass2;
