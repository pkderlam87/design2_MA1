var productLink = document.querySelector(".kitchen");
var productLinkButton = document.querySelector("#kitchen");


productLink.addEventListener("click", goToProductPage);
productLinkButton.addEventListener("click", goToProductPage);

function goToProductPage() {
    location.href = "/products.html";
}