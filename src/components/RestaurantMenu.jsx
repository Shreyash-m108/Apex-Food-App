// RestaurantMenu.jsx
import Shimmer from "./Shimmer";
import { useLocation, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const location = useLocation();
  const path = location.pathname.replace("/restaurant", "");
  const resMenu = useRestaurantMenu(path);

  if (resMenu == null) return <Shimmer />;

  const menuCategory = resMenu.page_data?.order?.menuList?.menus;

  //console.log(items);
  return (
    <div>
      <div className="shadow-xl mt-3 mb-3 p-5 rounded-xl flex justify-between items-start">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            {resMenu.page_data?.sections?.SECTION_BASIC_INFO?.name ||
              "Restaurant"}
          </h2>

          {resMenu.page_data?.sections?.SECTION_BASIC_INFO?.cuisine_string && (
            <h4 className="text-base text-gray-600 mt-1">
              {resMenu.page_data.sections.SECTION_BASIC_INFO.cuisine_string}
            </h4>
          )}

          {resMenu.page_data?.sections?.SECTION_BASIC_INFO?.timing
            ?.customised_timings?.opening_hours?.[0]?.timing && (
            <h5 className="text-sm text-gray-500 mt-1">
              timing:
              {
                resMenu.page_data.sections.SECTION_BASIC_INFO.timing
                  .customised_timings.opening_hours[0].timing
              }
            </h5>
          )}
        </div>

        <div className="text-right">
          {resMenu.page_data?.sections?.SECTION_BASIC_INFO?.rating
            ?.aggregate_rating && (
            <div className="text-yellow-600 font-semibold text-lg">
              ⭐{" "}
              {
                resMenu.page_data.sections.SECTION_BASIC_INFO.rating
                  .aggregate_rating
              }
            </div>
          )}
          <div className="text-sm text-gray-500 mt-1">
            {resMenu.page_data?.sections?.SECTION_BASIC_INFO?.rating
              ?.rating_text || "Ratings"}
          </div>
        </div>
      </div>

      {menuCategory.map((menu) => (
        <RestaurantCategory
          key={menu.menu.id ?? menu.menu.name}
          data={menu.menu.name || "unnammed Menu"}
          menu={menu}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
