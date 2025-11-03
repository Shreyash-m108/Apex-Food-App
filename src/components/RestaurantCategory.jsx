import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, menu }) => {
  //console.log(data);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-3 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">{data}</span>
          <span className="font-bold">🔽</span>
        </div>
        {showItems && <ItemList items={menu} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
