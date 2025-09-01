import { LOGO_URL } from "../utils/constant"
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Login</li>
          <li>SignUp</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
