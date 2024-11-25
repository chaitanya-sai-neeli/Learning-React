import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            userInfo:{
                login: "sample user name",
                id: "sample user location"
            }
        }   
         //console.log(this.props.name+ " Child Constructor");
    }

    async componentDidMount(){
         console.log(this.props.myname+" Child comp Mounted");
        const data = await fetch("https://api.github.com/users/chaitanya-sai-neeli");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        const {myname, place} = this.props;
        const {count} = this.state;
        const {login, id, avatar_url} = this.state.userInfo;
         //console.log(this.props.name+  " Child render");
        return (
            <div className = "user-card">
                <h2>{myname}</h2>
                <h3>{place}</h3>
                <h3>Count: {count}</h3>
                <button onClick = {() => {
                    this.setState(
                        // (prevState)=>({count : prevState.count + 1})   //Arrow function syntax
                        // function(prevState){
                        //     return {count: prevState.count + 1};      //Normal function syntax returning the object not just value or expression
                        // }
                        {count: count + 1}
                    )
                }}>Increment</button>
                <h4>Phone: 1234567890</h4>
                <h3>-----------------Actual data with github user API-------------</h3>
                <h2>{login}</h2>
                <h3>{id}</h3>
                <img src = {avatar_url} style={{height:200}}></img>
            </div>
        )
    }
}

export default UserClass;
