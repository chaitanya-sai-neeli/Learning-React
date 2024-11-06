import RestoCard from "./RestoCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    /*Above piece of code is Array Destructuring on the fly and can also be written as
    const arr = useState(restList);
    const [listOfRestaurants, setlistOfRestaurants] = arr;
     (or)
    arr[0] = listOfRestaurants;
    arr[1] = setlistOfRestaurants;*/
    const [loading, setLoading] = useState(true); // New state for loading

    useEffect(()=>{
        fetchData();
    }, []);    

    const fetchData = ()=> {
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4473863&lng=78.3713412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      // const json = await data.json();
      // console.log(json);
      setTimeout( () => {
        setlistOfRestaurants(restList);
        setLoading(false); // Set loading to false after data is fetched
      }, 500); // 500 milli seconds loading time
    }
    
    // if (loading) return <Skeleton/>     //this is conditional rendering: Rendering according to a condition
    
    return loading ? <Skeleton/> : (
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
            {/* Below is the basic/initial way of passing props to a component */}
            {/* https://youtu.be/E2tbZoTjcQA */}
            {/* <RestoCard restName="Kulfi House" restCuisine="Kulfi, Desserts, Cup Cakes" restRating="4.2 *" 
                    restImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/auczcmkdvvxzt2mswvcc"/>
                    <RestoCard restName="President Dhaba" restCuisine="North Indian, Parota" restRating="4.8 *" 
                    restImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"/> */}
            {/* {<RestoCard restData = {restList[0]}/>}
                    {<RestoCard restData = {restList[1]}/>}
                    {<RestoCard restData = {restList[2]}/>} */}
            {listOfRestaurants.map((restaurant) => {
                return <RestoCard key={restaurant.id} restData={restaurant}/>}
            )}
        </div>
        </div>
    );
};

export default Body;
