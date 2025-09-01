import RestaurantCard from "./RestaurantCard"
import restaurantsList from "../utils/Reslist"

const Body = () => {
  return (
    <div className="body">
      <div className="rating-button">
        <button className="top-rated" onClick={() => {}}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
export default Body
