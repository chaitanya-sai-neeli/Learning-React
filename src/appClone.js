import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
// import Groceries from "./components/Groceries";
import { Suspense, lazy } from "react";
import Skeleton from "./components/Skeleton";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const parent = React.createElement("div", {}, "I am a parent root container");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
const Groceries = lazy(() => import("./components/Groceries"));

// const Header = () => {
//     return (
//         <div className = "headerMain">
//             <div className = "logoContainer">
//                 <img className = "logoimage" alt="appLogo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" />
//             </div>
//             <div className = "navItems">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };
// const RestoCard = (props) => {
//     const {restData} = props;
//     const {restImageUrl, restName, restCuisine, delvTime, restRating} = restData || {};
//     return (
//         <div className = "foodCard">
//             <img className="foodImage" src={restImageUrl}></img>
//             <h3>{restName}</h3>
//             <h4>{restCuisine}</h4>
//             <div className ="timeAndRating">
//                 <p>{delvTime}</p>
//                 <p  style ={{backgroundColor: "red", borderRadius: "5px", backgroundColor:"#267E3E", color: "white"}}>{restRating}</p>
//             </div>
//         </div>
//     );
// }
// const restList = [
//     {
//         restName : "Kulfi House",
//         id: 1234,
//         restCuisine : "Kulfi, Desserts",
//         restRating : "4.2 *",
//         delvTime: "25-30 mins",
//         restImageUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/auczcmkdvvxzt2mswvcc"
//     },
//     {
//         restName : "President Dhaba",
//         id: 1235,
//         restCuisine : "North Indian, Parota",
//         restRating : "4.6 *",
//         delvTime: "45-50 mins",
//         restImageUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"
//     },
//     {
//         restName : "Rolls King",
//         id: 1236,
//         restCuisine : "Rolls, Wraps, Fast-food",
//         restRating : "3.8 *",
//         delvTime: "15-20 mins",
//         restImageUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/swqonxjf0mv406jhzt9t"
//     },
//     {
//         restName : "La Pino'z",
//         id: 1237,
//         restCuisine : "Pizza, Momos, Burgers",
//         restRating : "3.1 *",
//         delvTime: "25-30 mins",
//         restImageUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d20fdc8c86aa8bd0638f47dd013d46f9"
//     },
//     {
//         restName : "KFC",
//         id: 1238,
//         restCuisine : "Chicken bucket, Rolls, Desserts",
//         restRating : "4.2 *",
//         delvTime: "35-40 mins",
//         restImageUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_774103.JPG"
//     }
// ]
// const Body = () => {
//     return(
//         <div className = "bodyMain">
//             <div className = "search">
//                 <input type="text" placeholder="search here"></input>
//             </div>
//             <div className="foodCardContainer">
//                 {/* <RestoCard restName="Kulfi House" restCuisine="Kulfi, Desserts, Cup Cakes" restRating="4.2 *"
//                 restImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/auczcmkdvvxzt2mswvcc"/>
//                 <RestoCard restName="President Dhaba" restCuisine="North Indian, Parota" restRating="4.8 *"
//                 restImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"/> */}
//                 {/* {<RestoCard restData = {restList[0]}/>}
//                 {<RestoCard restData = {restList[1]}/>}
//                 {<RestoCard restData = {restList[2]}/>} */}
//                 {restList.map((restaurant) => {
//                     return <RestoCard key  = {restaurant.id} restData = {restaurant}/>
//                 })}
//             </div>
//         </div>
//     );
// }

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Neeli Chaitanya Sai",
    };
    setUserName(data.name);
  }, []);

  return (
    <div id="parent" className="layout">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

/*Creating the configuration:
 * imported createBrowserRouter from react-router-dom
 * it takes in some config
 * Config is a list, list of objects
 * each object defines a diff path and what should happen in it
 * Router provider will provide us the routing config to our app
 * Router provider is a component
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<Skeleton />}>
            {" "}
            <Groceries />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);
