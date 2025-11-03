import vegImage from "../utils/assets/non-veg-icon.png";
import nonVegImage from "../utils/assets/non-veg-icon.png";

const ItemList = ({ items }) => {
  const menuItems = items.menu?.categories[0]?.category?.items;

  return (
    <div className="mt-3">
      {menuItems.map((item) => (
        <div
          key={item.item.id}
          className="flex justify-between items-center border-b p-3 hover:bg-gray-50"
        >
          <div className="flex flex-col text-left">
            {item?.item?.tag_slugs[0] === "non-veg" ? "🔴" : "🟢"}

            <span className="font-semibold text-gray-800">
              {item?.item?.name}{" "}
            </span>
            <span className="text-sm text-gray-600">
              ₹{item?.item?.default_price}
            </span>
          </div>

          <div className="relative flex flex-col items-center">
            {item?.item?.item_image_thumb_url ? (
              <img
                src={item.item.item_image_thumb_url}
                alt={item?.item?.name}
                className="w-28 h-28 object-cover rounded-lg border"
              />
            ) : (
              <div className="w-28 h-28 flex items-center justify-center text-xs text-gray-400 border rounded-lg bg-gray-50">
                No Preview
              </div>
            )}

            <button className="absolute bottom-1/2 translate-y-15 border rounded-lg px-3 py-1 bg-white text-sm font-medium hover:bg-gray-100 shadow-sm transition">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
