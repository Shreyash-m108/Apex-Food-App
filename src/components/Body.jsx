import RestaurantCard from "./RestaurantCard"
import restaurantsList from "../utils/Reslist"
import { useState } from "react"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList)

  return (
    <div className="body">
      <div className="rating-button">
        <button
          className="top-rated"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            )
            setListOfRestaurants(filterList)
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
export default Body
