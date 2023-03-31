// Load the header from the ./ file and insert it into the div with id="header"
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("#header");
    header.innerHTML = '<object type="text/html" data="./" ></object>';
  });
  

/*
  // Define an array to store the shopping cart items
var shoppingCart = [];

// Define a function to add items to the shopping cart
function addToCart(itemName, itemPrice) {
  // Create an object to represent the item
  var item = {
    name: itemName,
    price: itemPrice
  };
  
  // Add the item to the shopping cart array
  shoppingCart.push(item);
}

// Define a function to display the shopping cart
function displayCart() {
  // Get the element to display the cart
  var cartElement = document.getElementById("cart");

  // Clear the previous content of the cart element
  cartElement.innerHTML = "";

  // Loop through the shopping cart array and display each item
  for (var i = 0; i < shoppingCart.length; i++) {
    var item = shoppingCart[i];
    var itemElement = document.createElement("div");
    itemElement.innerHTML = item.name + " - $" + item.price;
    cartElement.appendChild(itemElement);
  }
}

// Call the addToCart function to add an item
addToCart("Product 1", 9.99);

// Call the addToCart function to add another item
addToCart("Product 2", 19.99);

// Call the displayCart function to display the shopping cart
displayCart();

// Define an empty array to store the cart items
let cartItems = [];

// Get all the add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Loop through all the add-to-cart buttons
addToCartButtons.forEach(button => {
  // Add a click event listener to each button
  button.addEventListener('click', () => {
    // Get the product details
    const productContainer = button.parentElement.parentElement;
    const productName = productContainer.querySelector('.product-name').innerText;
    const productPrice = productContainer.querySelector('.product-price').innerText;

    // Add the product details to the cartItems array
    cartItems.push({name: productName, price: productPrice});

    // Update the cart
    updateCart();
  });
});

// Get the cart table and the total price element
const cartTable = document.querySelector('#cart-table');
const totalPriceElement = document.querySelector('#total-price');

// Function to update the cart
function updateCart() {
  // Clear the cart table
  cartTable.innerHTML = '';

  // Calculate the total price
  let totalPrice = 0;

  // Loop through all the cart items and add them to the cart table
  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><button class="remove-from-cart" data-name="${item.name}">Remove</button></td>
    `;
    cartTable.appendChild(row);

    // Add the item price to the total price
    totalPrice += parseFloat(item.price);
  });

  // Update the total price element
  totalPriceElement.innerText = totalPrice.toFixed(2);

  // Get all the remove-from-cart buttons
  const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');

  // Loop through all the remove-from-cart buttons
  removeFromCartButtons.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
      // Get the name of the item to remove
      const itemName = button.getAttribute('data-name');

      // Remove the item from the cartItems array
      cartItems = cartItems.filter(item => item.name !== itemName);

      // Update the cart
      updateCart();
    });
  });
}

*/

document.addEventListener("DOMContentLoaded", function() {
  const animateTime = 30;

  const element = document.getElementById("animate");
  element.innerText = "";
  const text = "Cats are often overlooked and underrepresented in our world, and many of them do not have a loving home to call their own. It's important to raise awareness and encourage others to care for these furry feline friends. Whether through adoption, volunteering at a shelter, or simply spreading the word, we can all make a difference in the lives of these precious animals. Let's work together to ensure that all cats receive the love and care they deserve!!"
  for (let i = 0; i < text.length; i++) {
    window.setTimeout(() => {
      element.innerText = text.substring(0, i)
    }, animateTime * i)
  }

  const element2 = document.getElementById("animate2");
  element2.innerText = "";
  const text2 = `If you hear cats singing on the street, don't be alarmed. They're probably just rehearsing for their upcoming kitty boy band, "The Meow-tations".`
  for (let i = 0; i < text2.length; i++) {
    window.setTimeout(() => {
      element2.innerText = text2.substring(0, i)
    }, animateTime * (i + text.length))
  }

  const element3 = document.getElementById("animate3");
  element3.innerText = "";
  const text3 = `Kitty, kitty, fluffy and small
  With eyes so bright and a purring call
  Soft fur, cute nose, and tiny paws
  You're the feline beauty that we adore`
  for (let i = 0; i < text2.length; i++) {
    window.setTimeout(() => {
      element3.innerText = text3.substring(0, i)
    }, animateTime * (i + text.length + text2.length))
  }

  const element4 = document.getElementById("animate4");
  element4.innerText = "";3
  const text4 = `From whiskers to tail, you're perfect and sweet
  A bundle of joy, with tiny paws and feet
  We love you always, you bring us such glee
  Our little kitty, you complete our family.`
  for (let i = 0; i < text4.length; i++) {
    window.setTimeout(() => {
      element4.innerText = text4.substring(0, i)
    }, animateTime * (i + text.length + text2.length + text3.length))
  }

  const element5 = document.getElementById("animate5");
  element5.innerText = "";
  const text5 = `Meow, meow, little friend
  You're the love that never ends
  Cuddle up, and let's pretend
  That we're the best of friends`
  for (let i = 0; i < text5.length; i++) {
    window.setTimeout(() => {
      element5.innerText = text5.substring(0, i)
    }, animateTime * (i + text.length + text2.length + text3.length + text4.length))
  }

  const element6 = document.getElementById("animate6");
  element6.innerText = "";
  const text6 = `Kitty, kitty, we sing for you
  Our love for you, forever true
  Meow, meow, we say goodbye
  Until the next time, our friend, don't cry.`
  for (let i = 0; i < text6.length; i++) {
    window.setTimeout(() => {
      element6.innerText = text6.substring(0, i)
    }, animateTime * (i + text.length + text2.length + text3.length + text4.length + text5.length))
  }
})
