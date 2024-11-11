import { useState, useEffect } from "react";

function useFetchQuote (){
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuote = async () => {
        try{   
            const response = await fetch("https://zenquotes.io/api/random");
            const json = await (response.json());
            const [{q: fetchedQuote, a: fetchedAuthor}] = json;
            console.log(json);
            setQuote(fetchedQuote);
            setAuthor(fetchedAuthor);
        }
        catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return {quote, author};
}

export default useFetchQuote;
