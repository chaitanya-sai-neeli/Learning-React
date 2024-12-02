import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  // console.log(data);
  const showCategoryItems = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-2 ">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={showCategoryItems}
      >
        <span className="font-bold">
          {data.title.replace(/"/g, "")} ({data.itemCards.length})
        </span>
        <span>{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Body */}
      <div className="mt-2">
        {showItems && <ItemList itemData={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
