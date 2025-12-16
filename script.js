const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

let cards = document.querySelector("div.cards");

function removeLoadingMessage() {
  const loadingMessage = document.querySelector(".loading");
  if (loadingMessage) {
    loadingMessage.remove();
  }
}

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((jsObject) => {
    removeLoadingMessage();

    let business = jsObject.business;
    for (let i = 0; i < business.length; i++) {
      let card = document.createElement("section");
      card.className = "card";

      let img = document.createElement("img");
      img.src = business[i].imageurl;
      img.alt = business[i].name;
      img.className = "business-logo";
      card.appendChild(img);

      let contentDiv = document.createElement("div");
      contentDiv.className = "card-content";
      card.appendChild(contentDiv);

      let h3 = document.createElement("h3");
      h3.textContent = business[i].name;
      h3.className = "card-title";
      contentDiv.appendChild(h3);

      let location = document.createElement("div");
      location.className = "card-location";
      location.textContent = business[i].address;
      contentDiv.appendChild(location);

      let description = document.createElement("p");
      description.textContent = business[i].description;
      contentDiv.appendChild(description);

      cards.appendChild(card);
    }
  })

  .catch((error) => {
    removeLoadingMessage();
    cards.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #e74c3c;">
                <h2>Error Loading Data</h2>
                <p>${error.message}</p>
                <p>Please try again later.</p>
            </div>
        `;
    console.error("There was a problem with the fetch operation:", error);
  });
