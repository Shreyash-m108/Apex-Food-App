import { useDispatch, useSelector } from "react-redux";
import { addItem, emptyCart, removeItem } from "../utils/store/cartSlice";

const Cart = () => {
  const store = useSelector((store) => store);
  const menuItem = store.cart.items;
  console.log(menuItem);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(emptyCart());
  };

  const handlePlus = (item) => {
    dispatch(addItem(item));
  };

  const handleMinus = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="text-center m-6 p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      <div className="flex flex-col items-center gap-3">
        {menuItem.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 w-6/12 p-3 rounded-lg shadow-sm border border-gray-200"
          >
            <span className="text-gray-800 font-medium text-left w-5/12 truncate">
              {item.name}
            </span>

            <div className="flex justify-center w-24">
              <div className="flex items-center justify-between w-full border rounded-lg bg-white shadow-sm">
                <button
                  className="w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-2xl"
                  onClick={() => handleMinus(item?.id)}
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-medium select-none">
                  {item?.qty}
                </span>
                <button
                  className="w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-2xl
                "
                  onClick={() => handlePlus(item)}
                >
                  +
                </button>
              </div>
            </div>

            <span className="text-gray-700 font-semibold w-2/12 text-right">
              ₹{item?.price * item?.qty || item?.default_price * item?.qty || 0}
            </span>
          </div>
        ))}
      </div>
      {menuItem.length != 0 ? (
        <div className="w-6/12 mx-auto mt-4 flex justify-end">
          <button
            onClick={handleClear}
            className="border rounded px-3 py-1 text-lg font-medium hover:bg-gray-100 transition"
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <h2 className="text-2xl mt-4">Please add food to your Cart</h2>
      )}
    </div>
  );
};

export default Cart;
