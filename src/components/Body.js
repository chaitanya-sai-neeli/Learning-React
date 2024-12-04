import RestoCard, { WithPromotedLabel } from "./RestoCard";
import restList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestList, setAllRestList] = useState([]);
  /*Above piece of code is Array Destructuring on the fly and can also be written as
    const arr = useState(restList);
    const [listOfRestaurants, setListOfRestaurants] = arr;
     (or)
    arr[0] = listOfRestaurants;
    arr[1] = setListOfRestaurants;*/
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // New state for loading till we get actual data from API
  const PromotedRestauarant = WithPromotedLabel(RestoCard); //Higher order component
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4473863&lng=78.3713412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //   const json = await data.json();
    //   setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards) //This is Optional Chaining
    //   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setTimeout(() => {
      setListOfRestaurants(restList);
      setAllRestList(restList);
      setLoading(false); // Set loading to false after data is fetched
    }, 300); // 500 milli seconds loading time
  };

  const handleSearch = () => {
    const searchResult = allRestList.filter((res) =>
      res.restName.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(searchResult);
  };

  const handleFilter = () => {
    const filteredRestaurants = allRestList.filter((restaurant) => {
      const ratingToNum = Number(restaurant.restRating.replace("*", ""));
      return ratingToNum > 4;
    });
    setListOfRestaurants(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  // if (loading) return <Skeleton/>     //this is conditional rendering: Rendering according to a condition
  return loading ? (
    <Skeleton />
  ) : (
    <div className="bodyMain">
      <div className="my-3.5 ml-8">
        <input
          type="text"
          placeholder="search for food "
          // className=" ml-8 border border-black rounded-md"
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 focus:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="mx-2.5 px-3.5 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md transition ease-in-out duration-200 rounded-md"
          onClick={handleSearch}
        >
          🔍
        </button>

        <button
          className="mx-2.5 px-3.5 py-1  bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md transition ease-in-out duration-200 rounded-md"
          onClick={handleFilter}
        >
          Filter by 4 rating
        </button>
        <input
          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 focus:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-wrap my-3.5 ml-8">
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
          return (
            <Link
              key={restaurant.id}
              to={"/restaurants/" + restaurant.id}
              style={{ textDecoration: "none" }}
            >
              {restaurant.promoted ? (
                <PromotedRestauarant restData={restaurant} />
              ) : (
                <RestoCard restData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
