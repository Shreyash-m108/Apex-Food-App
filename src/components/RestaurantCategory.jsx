import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
        <div className="flex justify-between">
          <span className="font-semibold text-lg">
            {data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {
          <ItemList
            item={data?.card?.card?.itemCards}
            key={data?.card?.card?.title || index}
          />
        }
      </div>
    </div>
  );
};

export default RestaurantCategory;
