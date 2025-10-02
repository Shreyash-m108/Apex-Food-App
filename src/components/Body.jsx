import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filterRestaurants, setFilterRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [offSet, setOffset] = useState("");
  let [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (nextOffset = "") => {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8530093&lng=74.56234789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING${
      nextOffset ? `&offset=${nextOffset}` : ""
    }`;

    const data = await fetch(url);
    const jsonData = await data.json();

    const newRestaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants((prev) => {
      const merged = [...prev, ...newRestaurants];
      const unique = merged.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.info.id === item.info.id)
      );
      return unique;
    });
    setFilterRestaurants((prev) => {
      const merged = [...prev, ...newRestaurants];
      const unique = merged.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.info.id === item.info.id)
      );
      return unique;
    });

    const next = jsonData?.data?.pageOffset?.nextOffset;

    if (next) {
      setOffset(next);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        if (hasMore) {
          getData(offSet);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offSet, hasMore]);
  console.log("rendering body component");

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
              const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurants(filterList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={/restaurant/ + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
