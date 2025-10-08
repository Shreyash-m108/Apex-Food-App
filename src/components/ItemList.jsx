import { CDN_URL } from "../utils/constant";

const ItemList = ({ item }) => {
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card?.info?.id}
          className="flex justify-between items-start p-3 mx-1 border-b-2 border-gray-400 text-left"
        >
          <div className="flex flex-col items-start w-9/12">
            {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
              <span>🟢</span>
            ) : (
              <span>🔴</span>
            )}
            <span className="font-bold text-gray-900">
              {item?.card?.info?.name}
            </span>
            <span className="font-semibold text-gray-800">
              Rs.{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>

            <p className="text-xs text-gray-600 mt-1">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 flex flex-col justify-end items-center relative">
            {item?.card?.info?.imageId ? (
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-30 h-30 object-cover rounded-xl shadow-md"
              ></img>
            ) : (
              <div className="w-30 h-30 flex items-center justify-center bg-gray-100 rounded-xl text-xs text-gray-500 shadow-md">
                No Preview Available
              </div>
            )}

            <button className="absolute bottom-[-16px] px-4 pb-0.5 border border-black bg-white hover:bg-gray-300 rounded-xl font-bold text-green-500">
              + ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
