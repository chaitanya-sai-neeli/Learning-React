import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
    } 

    render(){
        const {name, place} = this.props
        return (
            <div className = "user-card">
                <h2>{name}</h2>
                <h3>{place}</h3>
                <h4>Phone: 7780558397</h4>
            </div>
        )
    }
}

export default UserClass;
