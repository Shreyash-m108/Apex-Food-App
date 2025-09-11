import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(()=>{
    getData()
  }, [])

  const getData = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8530093&lng=74.56234789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json()
    setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }
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
