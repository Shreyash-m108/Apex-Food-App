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
    <header className="flex justify-between items-center bg-slate-50 shadow-md px-6 py-2">
      <div className="logo-container ">
        <Link to={"/"}>
          <img className="w-32" src={LOGO_URL} alt="App Logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex mx-4 px-4 cursor-pointer">
          <li className="font-medium text-gray-600">
            <Link
              to={"/"}
              className="p-3 block hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl"
            >
              Home
            </Link>
          </li>
          <li className="font-medium text-gray-600">
            <Link
              to={"/about"}
              className="p-3 block hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl"
            >
              About
            </Link>
          </li>
          <li className="font-medium text-gray-600">
            <Link
              to={"/contact"}
              className="p-3 block hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl"
            >
              Contact
            </Link>
          </li>
          <li className="font-medium text-gray-600 p-3 block hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl">
            Cart
          </li>
          <li className="font-medium text-gray-600">
            <Link
              to={"/grocery"}
              className="p-3 block hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl"
            >
              Grocery
            </Link>
          </li>
          <li className="font-medium text-gray-600">
            <button
              className="p-3 block hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl"
              onClick={() => {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }}
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
