import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
        <div
          className="flex justify-between cursor-default"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})
          </span>
          {showItems === false ? (
            <span className="text-xl">🔼</span>
          ) : (
            <span className="text-xl">🔽</span>
          )}
        </div>

        {showItems && (
          <ItemList
            item={data?.card?.card?.itemCards}
            key={data?.card?.card?.title || index}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
