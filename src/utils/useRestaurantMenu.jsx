import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (path) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=" + path + "&Location"
    );

    const jsonData = await data.json();

    setResMenu(jsonData);
  };
  return resMenu;
};

export default useRestaurantMenu;
