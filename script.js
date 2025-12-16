
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
        cards = document.createElement("div");
        cards.className = "business-card";
let h3 = document.createElement("h3");
h3.textContent = business[i].name;
        cards.appendChild(h3);
document.querySelector('h3').appendChild(cards);
}
});

async function fetchBusinessData(){
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        if (data.business && data.business.length > 0) {
            document.querySelector('#business-name').textContent = data.business[0].name;
            document.querySelector('#business-location').textContent = data.business[0].location;
            document.querySelector('#business-description').textContent = data.business[0].description;
        }
        return;
}

// // Create the image location, you can look up how to add image using javascript

// // Include a business location

// // Include a business Description
