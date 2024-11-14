import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <h2>Learning React from scratch</h2>
            <User name="Chaitanya Sai Neeli (Function)" place="Mahabubnagar"/>

            <UserClass name="Chaitanya Sai Neeli (Class)" place="Mahabubnagar"/>
        </div>
    )
}

export default About;