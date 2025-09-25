import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8530093&lng=74.56234789999999&restaurantId=415646&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json.data);
    setResMenu(json.data);
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, totalRatingsString } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <div className="res-name-info">
        <p>
          {cuisines.join(", ")}-{costForTwoMessage}
        </p>
        <h3>{avgRating}</h3>
        <h4>{totalRatingsString}</h4>
      </div>

      <h2>Menu: </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs."}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
