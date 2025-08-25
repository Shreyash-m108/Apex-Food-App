import React from "react"
import ReactDOM from "react-dom/client"

//low level design for app
/*
-nav
    -logo
    -home
    -cart
    -login
-body
    -search-bar
    -container
        -restaurants-card
         -img of res
         -name of res
-footer
    -copyright
    -abooutus
    -contactus

*/

//nav-bar
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993"
        />
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="Shree Foods"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/408cdf63-eaa9-4470-91cc-116c671d56d9_415646.JPG"
      />
      <h3>Pizza Hut</h3>
      <h4>Pizzas</h4>
      <h4>4.3</h4>
      <h5>Vishrambag</h5>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="mainApp">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
