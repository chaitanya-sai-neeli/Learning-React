import { ITEM_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  // console.log("itemData=" , itemData)
  return (
    <div>
      {itemData.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-300 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-left font-semibold">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? Math.floor(item.card.info.price / 100)
                  : Math.floor(item.card.info.defaultPrice / 100)}
              </span>
            </div>
            <p className="text-left text-xs mt-6">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 m-1">
            {/* <div className = "absolute">
                            <button className="bg-white text-green-700 font-bold px-8 border-2 rounded-lg my-[110] mx-8">ADD</button>
                        </div> */}
            {item.card.info.imageId && (
              <img
                src={ITEM_URL + item.card.info.imageId}
                className="h-32 w-40 rounded-lg"
                alt="Item"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
