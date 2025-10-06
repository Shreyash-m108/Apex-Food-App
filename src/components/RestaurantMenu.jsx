import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_ITEM_IMG } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, totalRatingsString } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" min-h-screen px-4 py-4 pt-15">
      <div className="w-6/12 max-w-3xl">
        <h1
          className="text-2xl text  -center
         font-bold text-gray-900"
        >
          {name}
        </h1>
        <div className="mt-2  flex flex-wrap justify-center items-center gap-3">
          <p className="text-sm  text-gray-600">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-2.5 py-1">
            <span className="text-sm font-medium text-green-700">
              ⭐ {avgRating}
            </span>
            <span className="text-xs text-green-700">{totalRatingsString}</span>
          </div>
        </div>
      </div>

      <div>
        {categories.map((category) => (
          <RestaurantCategory
            key={category.card?.card?.title || index}
            data={category}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
