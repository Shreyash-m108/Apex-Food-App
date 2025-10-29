import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/menu");
    const jsonData = await data.json();
    setResMenu(jsonData);
  };
  return resMenu;
};

export default useRestaurantMenu;
