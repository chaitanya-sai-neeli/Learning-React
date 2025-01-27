/*
fetch() => Response.json => jsonValue
Fetch function is basically returns a promise
When promise is resolved it gives a Response(response object), and it has a body which is in readable stream format
To convert this response object in to json, we use Response.json(). Here Response.json is again a promise and when it is resolved it gives us the result/jsonValue.
*/
const API_URL = "https://api.github.com/users/akshaymarch7";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();

// What is a async function ?
// async is a keyword used along with a function and async functions are diff form normal functions and await can only be used inside of a async function to handle promises
