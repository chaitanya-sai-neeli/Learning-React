import RestoCard from "./RestoCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchData();
    }, []);    

    const fetchData = async ()=> {
      setTimeout( () => {
        setlistOfRestaurants(restList);
        setLoading(false);    
      }, 500);                  
    }
    
    if (loading) return <Skeleton/>

    return (
        <div className="bodyMain">
        <div className="search">
            <input type="text" placeholder="search here"></input>
            <button className="filterBtn" onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter( function(restaurant){
                    let ratingToNum = Number(restaurant.restRating.replace("*", ""));
                    if (ratingToNum > 4) return restaurant;
                });
                setlistOfRestaurants(filteredRestaurants);
            }}>
            Filter by 4 rating
            </button>
        </div>
        <div className="foodCardContainer">
            {listOfRestaurants.map((restaurant) => {
                return <RestoCard key={restaurant.id} restData={restaurant}/>}
            )}
        </div>
        </div>
    );
};

export default Body;
