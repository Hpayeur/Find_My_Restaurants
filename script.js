       let cards = document.querySelector("div.cards");
       let para = document.createElement("p");
       if (!cards) {
           cards = document.createElement("div");
           cards.className = "cards";
           document.body.appendChild(cards);
       }
        
        
        const URL = 'https://iskarr.github.io/austindonovan.github.io/api/business.json';
        console.log('Fetching data from:', URL);
fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
let cards = document.createElement("div");
cards.className = "cards";
let h3 = document.createElement("h3");
h3.textContent = (jsObject && jsObject.business && jsObject.business.length > 0) ? jsObject.business[0].name : "";
cards.appendChild(h3);
document.querySelector("div.cards").appendChild(cards);
});
