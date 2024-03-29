import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, fromcart }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              {!fromcart && (
                <button
                  className="p-2 mx-8 rounded-lg bg-black text-sm text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              )}
              {fromcart && (
                <button
                  className="p-2 mx-8 rounded-lg bg-black text-sm text-white shadow-lg"
                  onClick={() => handleDeleteItem(item)}
                >
                  Remove -
                </button>
              )}
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-3/5 m-auto rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
