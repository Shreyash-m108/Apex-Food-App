import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_ITEM_IMG } from "../utils/constant";
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
        <ul className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-200 my-2">
          {itemCards.map((item) => (
            <li
              className="flex justify-between gap-6 px-4 py-4 hover:bg-gray-50 transition"
              key={item.card.info.id}
            >
              <div className="flex flex-col w-40">
                <span className="block font-medium text-gray-900">
                  {item.card.info.name}
                </span>
                <img
                  src={MENU_ITEM_IMG + item.card.info.imageId}
                  className="mt-3 w-full h-28 object-cover rounded-2xl sm:w-40 sm:h-30
                    md:w-45 md:h-35 lg:w-45 lg:h-35 xl:w-45 xl:h-45"
                  loading="lazy"
                />
              </div>

              <div className=" flex flex-1 items-center text-sm text-gray-600">
                {item.card.info.description ? (
                  <p className="line-clamp-4">{item.card.info.description}</p>
                ) : (
                  <p>No description available</p>
                )}
              </div>

              <div className="flex items-center font-semibold text-gray-900 whitespace-nowrap">
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
