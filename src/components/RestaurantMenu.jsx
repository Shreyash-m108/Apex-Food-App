import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

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

  return (
    <div className="menu">
      <div className="restaurant-header">
        <h1>{name}</h1>

        <div className="restaurant-details">
          <p className="restaurant-cuisine">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          <div className="rating-box">
            <span className="avg-rating">⭐ {avgRating}</span>
            <span className="total-ratings">{totalRatingsString}</span>
          </div>
        </div>
      </div>

      <h2>Menu</h2>

      <ul className="menu-items-list">
        {itemCards.map((item) => (
          <li className="menu-item" key={item.card.info.id}>
            <div className="menu-item-details">
              <span className="item-name">{item.card.info.name}</span>
            </div>
            <div className="menu-item-price">
              <span>
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
