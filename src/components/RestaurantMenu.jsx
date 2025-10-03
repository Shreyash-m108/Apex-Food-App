import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
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

  return (
    <div className="grid justify-items-center bg-gray-50 min-h-screen px-4 py-6">
      <div className="w-full max-w-3xl mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          {name}
        </h1>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <p className="text-sm text-gray-600">
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
      <div className="w-full max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Menu</h2>
        <ul className="rounded-xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-200">
          {itemCards.map((item) => (
            <li
              className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50 transition"
              key={item.card.info.id}
            >
              <div>
                <span className="block truncate font-medium text-gray-900">
                  {item.card.info.name}
                </span>
              </div>
              <div className="font-semibold text-gray-900">
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
    </div>
  );
};

export default RestaurantMenu;
