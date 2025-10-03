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
      <img
        className="w-full h-48 group-hover:brightness-70"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <h4 className="text-gray-700 text-base flex-grow">
          {cuisines.join(", ")}
        </h4>
        <div className="pt-4 mt-auto border-t border-gray-500">
          <h4 className="font-semibold">{avgRatingString}★</h4>
          <h4 className="text-sm">{sla?.slaString}</h4>
          <h5 className="text-sm">{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
