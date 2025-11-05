import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ items }) => {
  const menuItems = items.menu?.categories[0]?.category?.items;
  const dispatcher = useDispatch();
  const handleCart = (item) => {
    dispatcher(addItem(item));
  };

  return (
    <div className="mt-3">
      {menuItems.map((item) => (
        <div
          key={item.item.id}
          className="flex justify-between items-start border-b p-3 hover:bg-gray-50"
        >
          <div className="flex flex-col text-left w-8/12">
            <span className="text-lg">
              {item?.item?.tag_slugs[0] === "non-veg" ? "🔴" : "🟢"}
            </span>

            <span className="font-semibold text-gray-800">
              {item?.item?.name}
            </span>
            <span className="text-sm text-gray-700 mt-1 font-medium">
              ₹{item?.item?.default_price}
            </span>

            {item?.item?.desc && (
              <p className="text-sm text-gray-600 mt-1 leading-snug">
                {item.item.desc}
              </p>
            )}
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

            <button
              className="absolute -bottom-0.5 hover:-translate-y-1 transition-all border rounded-lg px-3 py-1 bg-white text-sm font-medium hover:bg-gray-100 shadow-sm cursor-pointer"
              onClick={() => handleCart(item?.item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
