import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resID) => {
    const [restInfo, setRestInfo] = useState(null);
    
    useEffect(()=> {
        fetchMenu();
    },[])
    
    const fetchMenu = async() => {
        const data = await fetch(MENU_API_URL + resID);
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }

    return restInfo;
}

export default useRestaurantMenu;