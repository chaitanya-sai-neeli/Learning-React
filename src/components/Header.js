import { APPLOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setbtnNameReact]  = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className = "headerMain">
            <div className = "logoContainer">
                <img className = "logoimage" alt="appLogo" src={APPLOGO_URL} />
            </div>
            <div className = "navItems">
                <ul>
                    <li>Online: {onlineStatus ? "✅" : "❌"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Groceries">Groceries</Link></li>
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
