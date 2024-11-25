import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserClass2 from "./UserClass2";
class About extends React.Component{

    constructor(props){
        super(props)
         //console.log("Parent Constructor");
    }

    componentDidMount(){
         //console.log("Parent Comp mounted");
    }

    render(){
         //console.log("Parent Render");
        return(
            <div>
                <h1>About Us</h1>
                <h2>Learning React from scratch</h2>
                {/* <User name="Chaitanya Sai Neeli (Function)" place="Mahabubnagar"/> */}
                <UserClass myname="Chaitanya Sai Neeli (Class)" place="Mahabubnagar"/>
                {/* <UserClass name="Sample (Class)" place="SamplePlace"/> */}
                {/* <UserClass2 name="Sample (Class2)" place="SamplePlace"/> */}
            </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h2>Learning React from scratch</h2>
//             <User name="Chaitanya Sai Neeli (Function)" place="Mahabubnagar"/>

//             <UserClass name="Chaitanya Sai Neeli (Class)" place="Mahabubnagar"/>
//         </div>
//     )
// }

export default About;