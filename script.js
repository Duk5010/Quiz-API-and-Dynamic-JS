document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayProducts(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      document.getElementById("products-container").innerHTML =
        "Failed to load products.";
    });
});

function displayProducts(products) {
  const container = document.getElementById("products-container");

  const displayCount = 10;
  const productSubset = products.slice(0, displayCount);

  productSubset.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";

    productDiv.innerHTML = `
            <p class="product-name">BAKED BEANS</p>
            <p class="product-price">$0.40</p>
            <p class="product-type">Vegetables</p>
        `;

    container.appendChild(productDiv);
  });
}
