import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  let [login, setLogin] = useState("Login");
  console.log("Header rander");

  useEffect(() => {
    console.log("useEffect Rander");
  }, []);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg px-1.5 mx-1">
      <div className="logo-container ">
        <img className="w-40 " src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex mx-4 px-4 cursor-pointer">
          <li className="px-3 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-3 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Cart
          </li>
          <li className="px-3 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-3 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <button
              className="login-button"
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
