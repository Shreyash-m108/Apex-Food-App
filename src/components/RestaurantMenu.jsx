// RestaurantMenu.jsx
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (!resMenu || typeof resMenu !== "object") return <Shimmer />;

  // ✅ Access through the dynamic restaurant id
  const itemCards = resMenu?.resIds?.[resId]?.card?.itemCards ?? [];

  return (
    <div className="min-h-screen px-4 py-4 pt-15">
      <div className="w-6/12 max-w-3xl">
        <ItemList items={itemCards} />
        {itemCards.length === 0 && (
          <p className="text-sm text-gray-500 mt-4">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
