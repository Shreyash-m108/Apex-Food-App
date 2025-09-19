import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  let [login, setLogin] = useState("Login");
  console.log("Header rander");

  useEffect(() => {
    console.log("useEffect Rander");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }}
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
