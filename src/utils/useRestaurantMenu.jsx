import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData.data);
    setResMenu(jsonData.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
