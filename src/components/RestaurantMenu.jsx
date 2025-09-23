import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resMenu, setResMenu } = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8530093&lng=74.56234789999999&restaurantId=415646&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h2>Menu: </h2>
      <ul>
        <li>Food 1</li>
        <li>Food 2</li>
        <li>Food 3</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
