// Callback hell: The process of calling a function in an other function repeatedly will result in callback hell, due to which the code grows horizontally rather than vertically. It makes code harder to maintain and reduces the readability.
// Inversion of Control: When the call back functions are used we might not know whats happening in the parent function, if it is in other service or how many times our call back fn is being called ie;we might lose control over our code in callback fn.
//Promises: It is an object that represents the eventual completion or failure of an asynchronous operation.

const cart = ["crocs", "sneakers", "shirts"];
//createOrder is just an API
createOrder(cart, function (orderID) {
  proceedToPayment(orderID);
});

createOrder(cart, function (orderID) {
  proceedToPayment(orderID, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (summary) {
      updateWalletBalance(summary);
    });
  });
});
const promise = createOrder(cart);
// {data : undefined} Before Promise is fulfilled it is an object with key-value pair having "undefined" as its value.
promise
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balanceAmount) {
    return updateWalletBalance(balanceAmount);
  });

//Above code can we rewritten as
createOrder(cart)
  .then((orderID) => proceedToPayment(orderID))
  .then((paymentInfo) => proceedToPayment(paymentInfo))
  .then((balanceAmount) => updateWalletBalance(balanceAmount));

const githubAPI = "https://api.github.com/users/chaitanya-sai-neeli";
// const pr = fetch(githubAPI);
// console.log(pr);
//Displaying the username from github username api
const sample = async () => {
  try {
    const data = await fetch(githubAPI);
    const json = await data.json();
    console.log("json = ", json);
    const labelElement = document.querySelector("label");
    labelElement.textContent = json.name;
  } catch (err) {
    console.log("Error in fetching api req", err);
  }
};
sample();
