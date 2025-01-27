const cart = ["crocs", "sneakers", "shirts"];
const promise = createOrder(cart) //returns orderID

promise.then(function (orderID) {
    // proceedToPayment(orderID)
    console.log(orderID);
    return orderID;
})
.then(function(orderID){
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message)
})

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!ValidateCart(cart)) {
            const err = new Error("Cart is not validated");
            reject(err);
        }
        const orderID = "12345";
        if (orderID) {
            setTimeout(function () {
                resolve(orderID);
            }, 1000)
        }
    });
    return pr;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("Payment successfull");
    });
}

function ValidateCart(cart) {
    return true;
} 