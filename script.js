// const URL = 'https://iskarr.github.io/austindonovan.github.io/api/business.json';
// let cards = document.querySelector("div.cards");
// let para = document.createElement("p");

// fetch(URL)
//         .then((response) => response.json())
//         .then((jsObject) => {
//           let business = jsObject.business;
//                 for (let i = 0; i < business.length; i++) {
//                         console.log(business[i].name);
// let card = document.createElement("section");
// card.className = "card";
// let h3 = document.createElement("h3");
// h3.textContent = business[i].name;
// card.appendChild(h3);
// document.querySelector("div.cards").appendChild(card);
//           }
//           });



const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";
let cards = document.querySelector("div.cards");
let para = document.createElement("p");
fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;
for (let i = 0; i < business.length; i++) {
console.log(business[i].name);
cards = document.createElement("food-cards");
// Adds a classname to the section element above
cards.className = "card";
let h3 = document.createElement("h3");
h3.textContent = business[i].name;
cards.appendChild(h3);
document.querySelector("div.cards").appendChild(cards);
}
});

// // Create the image location, you can look up how to add image using javascript

// // Include a business location

// // Include a business Description
