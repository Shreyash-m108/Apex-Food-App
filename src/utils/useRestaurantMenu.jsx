import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/sangli/restaurants&location"
    );
    const jsonData = await data.json();
    console.log(jsonData);

    setResMenu(jsonData);
  };
  return resMenu;
};

export default useRestaurantMenu;
