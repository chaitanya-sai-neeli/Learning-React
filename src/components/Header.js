import { APPLOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnNameReact, setbtnNameReact]  = useState("Login");
    return (
        <div className = "headerMain">
            <div className = "logoContainer">
                <img className = "logoimage" alt="appLogo" src={APPLOGO_URL} />
            </div>
            <div className = "navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className = "btnlogin" onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
