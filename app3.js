import React from "react";
import ReactDOM from "react-dom/client";
import useFetchQuote from "./DummyComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
const SampleApp = () =>{
    const {quote, author} = useFetchQuote();
    return(
        <div id="parentContainer">
            <p>helo world!</p>
            <p>{quote}</p>
            <p>{author}</p>
        </div>
    )
}

root.render(<SampleApp/>);


