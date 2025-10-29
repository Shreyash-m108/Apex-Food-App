import RestaurantCard from "./RestaurantCard";
import { createContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filterRestaurants, setFilterRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8530093&lng=74.56234789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const data = await fetch(url);
    const jsonData = await data.json();

    // find the card that has restaurants (index varies)
    const cards = jsonData?.data?.cards || [];
    const restCard = cards.find(
      (c) =>
        c?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        c?.gridElements?.infoWithStyle?.restaurants
    );

    const newRestaurants =
      restCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
      restCard?.gridElements?.infoWithStyle?.restaurants ??
      [];

    setListOfRestaurants(newRestaurants);
    setFilterRestaurants(newRestaurants);
  };

  
  const status = useOnlineStatus();
  if (status === false)
    return <h1>It seems to be you are disconnected from internet </h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4">
          <input
            type="text"
            className="input-text border-2 rounded-lg "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-400 hover:bg-green-700 text-white mx-4 border-1 border-black rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-300"
            onClick={() => {
              const filterList = listOfRestaurants.filter((res) => {
                const nameMatch = res.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());

                const cuisineMatch = res.info?.cuisines?.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                );
                return nameMatch || cuisineMatch;
              });
              setFilterRestaurants(filterList);
            }}
          >
            search
          </button>
        </div>
        <div className="rating-button">
          <button
            className="px-3 m-4 border-1 rounded-lg cursor-pointer bg-gray-100 hover:-translate-y-1 transition-all duration-300"
            onClick={() => {
              const filterList = listOfRestaurants.filter((res) => {
                const rating =
                  Number(res?.info?.avgRating) ||
                  Number(res?.info?.avgRatingString) ||
                  0;
                return rating > 4.5;
              });
              setFilterRestaurants(filterList); // 👈 update the list you render
            }}
          >
            Top Rated
          </button>
          <button
            className="px-3 m-4 border-1 rounded-lg cursor-pointer bg-gray-100 hover:-translate-y-1 transition-all duration-300"
            onClick={() => setFilterRestaurants(listOfRestaurants)}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full items-stretch">
          {filterRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
              className="h-full"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
