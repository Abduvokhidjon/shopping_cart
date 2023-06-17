function createEmptyCart(item) {
let cart = []
// cart.push(item);
return cart
 
}

function addToCart(cart, newProduct) {
// newProduct = [{ name: "AppleWatch", quantity: 9, price: 500 }];
cart.push(newProduct);
// return cart;
}

function removeFromCart(shoppingCart, unnecessaryProduct) {
for (i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i].name === unnecessaryProduct) {
    shoppingCart.splice(i, 1);
  }
}
}
function updateQuantity(cart, itemName, newQuantity) {
for (i = 0; i < cart.length; i++) {
  if (itemName === cart[i].name) {
    cart[i].quantity = newQuantity;
  }
}
return cart;
}
function calculateTotal(shoppingCart) {
  var totalCostofCart = 0;
  for (i = 0; i < shoppingCart.length; i++) {
    totalCostofCart += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return totalCostofCart
}

module.exports = { createEmptyCart, removeFromCart, addToCart, updateQuantity, calculateTotal };
