import React from "react";
import ReactDOM from "react-dom/client";

//React element using core React
const heading = React.createElement(
  "h1",
  {},
  "This is a heading tag from core React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React element using JSX
const heading2 = (<h2 id="heading" className="headings">This is a h1 tag using JSX</h2>);
root.render(heading2);

//React element (using JSX) inside a react element (usng JSX)
const parent2 = <h1>{heading2}This is a react element containing an other react element inside it </h1>
root.render(parent2);

//Functional component : JS function which returns a JSX code
const FunctionalComponent = function(){
    return <h1 id="heading">Heading tag with functional component</h1>;
} 

//Below we are inserting a React element"{}" and funtional component"<></>" inside an other, this is called as Component Composition
const FunctionalComponentDiv = () => (
    <div id="container" className="container">
        <FunctionalComponent/>    
        {parent2}
    </div>
);

root.render(<FunctionalComponentDiv/>);