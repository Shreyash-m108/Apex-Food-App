import { CDN_URL } from "../utils/constant";

const ItemList = ({ items = [] }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {items.map((it) => (
        <div
          key={it?.info?.id}
          className="flex justify-between items-start p-4 w-full max-w-2xl border-b border-gray-300 text-left"
        >
          {/* Left: Text */}
          <div className="flex flex-col items-start w-9/12">
            <span className="font-bold text-gray-900 text-lg">
              {it?.info?.name}
            </span>
            <p className="text-sm text-gray-600 mt-1">
              {it?.info?.description}
            </p>
          </div>

          {/* Right: Image + Button */}
          <div className="w-3/12 flex flex-col justify-end items-center relative">
            {it?.info?.imageId ? (
              <img
                src={CDN_URL + it?.info?.imageId}
                className="object-cover rounded-xl shadow-md w-[120px] h-[120px]"
                alt={it?.info?.name || "menu item"}
              />
            ) : (
              <div className="flex items-center justify-center bg-gray-100 rounded-xl text-xs text-gray-500 shadow-md w-[120px] h-[120px]">
                No Preview
              </div>
            )}

            <button className="absolute -bottom-4 px-4 pb-0.5 border border-black bg-white hover:bg-gray-300 rounded-xl font-bold text-green-500">
              + ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
