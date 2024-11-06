import { APPLOGO_URL } from "../utils/constants";
const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;
