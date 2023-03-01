/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  for (let item of products) {
    let { name: itemName } = item;
    let { availableSizes: itemSize } = item;
    if (itemName === name) {
      if (itemSize.includes(size)) {
        return item;
      } else return null;
    }
  }
  return null;
}

function addProductToCart(product, cart = {}) {
  let { name, priceInCents } = product;

  if (cart[name] !== undefined) {
    const matchingItem = cart[name];
    matchingItem.quantity += 1;
  } else {
    cart[name] = {
      quantity: 1,
      priceInCents: priceInCents,
    };
  }
  return cart;
}

function calculateTotal(cart = 0) {
  let totalPrice = 0;
  for (let item in cart) {
    let { quantity, priceInCents } = cart[item];
    totalPrice += quantity * priceInCents;
  }
  return totalPrice;
}

// refactor this \/ to include calculateTotal() and possibly destructure
function printReceipt(cart = null) {
  let message = "";
  for (let item in cart) {
    const { quantity, priceInCents } = cart[item];
    const priceInDollars = printablePrice(priceInCents);
    //remove the $ and convert priceInCents function from string to number to be able to multiply
    const totalPrice = quantity * Number(priceInDollars.substr(1));
    message += `${quantity}x${item} - $${totalPrice.toFixed(2)}\n`;
  }
  let cartTotal = printablePrice(calculateTotal(cart));
  if (cartTotal === "$0.00") {
    message = null;
  } else {
    message += `Total: ${cartTotal}`;
  }

  return message;
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
