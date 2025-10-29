import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="flex flex-col h-full bg-gray-200 hover:bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {/* Consistent media area */}
      <img
        className="w-full aspect-[16/9] object-cover group-hover:brightness-90"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Text column fills remaining space; footer sticks to bottom */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>

        {/* Clamp/limit cuisines height so rows align */}
        <h4
          className="text-gray-700 text-sm leading-snug mb-3 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {cuisines.join(", ")}
        </h4>

        <div className="mt-auto pt-3 border-t border-gray-400/60">
          <h4 className="font-semibold">{avgRatingString}★</h4>
          <h4 className="text-sm">{sla?.slaString}</h4>
          <h5 className="text-sm">{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
