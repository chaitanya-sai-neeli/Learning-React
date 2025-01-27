const cart = ["crocs", "sneakers", "shirts"];
const promise = createOrder(cart); //returns orderID

promise
  .then(function (orderID) {
    console.log("Order id:", orderID);
    return orderID;
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (paymentInfo) {
    if (paymentInfo) {
      console.log(paymentInfo);
    }
    return ShowOrderSummary(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  })
  .then(function (balanceAmount) {
    console.log(balanceAmount);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!ValidateCart(cart)) {
      const err = new Error("Cart is not validated");
      reject(err);
    }
    const orderID = "5732920636";
    if (orderID) {
      setTimeout(function () {
        resolve(orderID);
      }, 1000);
    }
  });
  return pr;
}

function proceedToPayment(orderID) {
  return new Promise(function (resolve, reject) {
    if (!ValidateOrder(cart)) {
      const err = new Error("Payment failed");
      reject(err);
    }
    const amountPaid = 8750;
    if (amountPaid) {
      resolve("Payment successfull");
    }
  });
}

function ShowOrderSummary() {
  return new Promise(function (resolve, reject) {
    if (!ValidateOrder(cart)) {
      const err = new Error(
        "We couldn't process your request at the moment. Please try again later!"
      );
      reject(err);
    }
    const summary = "Congratulations! Order has been succesfully placed.";
    if (summary) {
      resolve(summary);
    }
  });
}

function updateWalletBalance() {
  return new Promise(function (resolve, reject) {
    resolve("balance amount: 8750/-");
  });
}

function ValidateCart(cart) {
  return false;
}

function ValidateOrder(cart) {
  return true;
}
