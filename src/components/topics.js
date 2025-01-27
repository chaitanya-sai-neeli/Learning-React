// Creating Context
import { createContext, Suspense } from "react";
export const UserContext = createContext({
  loggedInUser: "Default User",
});
// Providing the context
import { Provider } from "react-redux";
<UserContext.Provider value={{ loggedInUser: userName }}>
  <App />
</UserContext.Provider>;
//Router
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
        path: "/groceries",
        element: (
          <Suspense fallback={<Skeleton />}>
            {" "}
            <Groceries />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
//Lazy loading
import { lazy, Suspense } from "react";
import Skeleton from "./Skeleton";
const Groceries = lazy(() => import("./Groceries"));
<Suspense fallback={<Skeleton />}>
  <Groceries />
</Suspense>;
//Redux
import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { addItem, removeItem } from "../redux/cartSlice";
export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
//slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: function (state) {
      state.items.pop();
    },
  },
});
export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
//Subscribing and disptaching
import { useDispatch, useSelector } from "react-redux";
const cartItems = useSelector((store) => store.cart.items);
const dispatch = useDispatch();
const handleRemoveItem = () => {
  dispatch(removeItem());
};
// Creating the above basic html structure using core React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag in child1"),
    React.createElement("h2", {}, "I am an h2 tag in child1"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

//Writing the above core React code in JSX
const myheading = <h1 className="headingtags">This is h1 tag using JSX</h1>;
root.render(myheading);
