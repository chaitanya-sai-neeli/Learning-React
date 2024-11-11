import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const {resID} = useParams();

    useEffect(()=> {
        fetchMenu();
    },[])
    
    const fetchMenu = async() => {
        const data = await fetch(MENU_API_URL + resID);
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }

    if(restInfo === null) return <Skeleton/>;

    // console.log("first : ", restInfo?.cards?.[2]?.card?.card?.info);
    // console.log("second : ", restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.[6]?.card?.info.name);

    const {name, cuisines, costForTwoMessage} = restInfo?.cards?.[2]?.card?.card?.info || {};
    const itemName  = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.[6]?.card?.info?.name || "No name available";
    const {itemCards = []} = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;

    return (
        <div>
            <h1>{name || "No name available"}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage || "No cost information"}</h3>
            <ul>
                {itemCards.map((item)=> {
                    return <li key= {item.card.info.id}>{item.card.info.name} {"-Rs."} {Math.floor(item.card.info.price/100) || Math.floor(item.card.info.defaultPrice/100)}</li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;