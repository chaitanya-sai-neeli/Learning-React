import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const restInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(0);

  if (restInfo === null) return <Skeleton />;
  /*console.log("first : ", restInfo?.cards?.[2]?.card?.card?.info);
  console.log("second : ", restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.[6]?.card?.info.name);
  const itemName  = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.[6]?.card?.info?.name || "No name available";*/
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards?.[2]?.card?.card?.info || {};
  const { itemCards = [] } =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card
      ?.card;
  const categories =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-2 p-1 text-lg">
        {name || "No name available"}
      </h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage || "No cost information"}
      </p>
      {categories.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
      {/* <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} {"-Rs."}{" "}
              {Math.floor(item.card.info.price / 100) ||
                Math.floor(item.card.info.defaultPrice / 100)}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
