import { APPLOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex bg-pink-100 h-24 border-black justify-between">
      <div className="logoContainer">
        <img className="h-7 ml-2.5 " alt="appLogo" src={APPLOGO_URL} />
      </div>
      <div className="mr-2.5 text-xl flex items-center">
        <ul className="flex align p-2">
          <li className="pr-6 m-3">Online: {onlineStatus ? "✅" : "❌"}</li>
          <li className="pr-6 m-3">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-6 m-3">
            <Link to="/About">About Us</Link>
          </li>
          <li className="pr-6 m-3">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="pr-6 m-3">
            <Link to="/Groceries">Groceries</Link>
          </li>
          <li className="pr-6 m-3">Cart</li>
          <li className="pr-6 m-3">
            <button
              className="btnlogin"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
          {/* <li className="pr-6 m-3 font-semibold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
