import React from "react";
import ReactDOM from "react-dom/client";

/*const heading = React.createElement("h1", {id : "heading"}, "Namaste React from React");
//React.createElement() creates a js object which is a React element, it doesn't create an html element directly

const root = ReactDOM.createRoot(document.getElementById("root"));
//ReactDOM.createRoot is used to create a root to display react components inside a browser

root.render(heading);
// during this render function the js object ie; the react element (from the first line) is converted in to an html element and puts it in to DOM 
*/
/*
<div id = "parent">
    <div id = "child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h1>
    </div>
    <div id = "child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h1>
    </div>
</div>
*/
// Creating the above basic html structure using core React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag in child1"),
    React.createElement("h2", {}, "I am an h2 tag in child1"),  
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag in child2"),
    React.createElement("h2", {}, "I am an h2 tag in child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent); 

//Writing the above core React code in JSX 
const myheading  = <h1 className="headingtags">This is h1 tag using JSX</h1>;
root.render(myheading); 
