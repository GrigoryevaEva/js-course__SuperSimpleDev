'use strict'

let cartQuantity = 0;

function showCart () {
  console.log(`Cart Quantity: ${cartQuantity}`);
};

function addCart (quantity) {

  if (cartQuantity + quantity > 10) {
    console.log("Limit 10");
    return;
  };
  
  cartQuantity += quantity;
  showCart();
};

function removeCart (quantity) {

  if (cartQuantity - quantity < 0) {
    console.log("Not enough items in the cart");
    return;
  };
  
  cartQuantity -= quantity;
  showCart();
};

function resertCart () {
  cartQuantity = 0;
  showCart();
};