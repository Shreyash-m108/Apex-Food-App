import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData.data);

    setResMenu(jsonData.data);
  }
  getData();
  return resMenu;
};

export default useRestaurantMenu;
