var productLinkButton = document.querySelectorAll("#kitchen");

productLinkButton.forEach(productLinkButton => productLinkButton.addEventListener("click", goToProductPage));

function goToProductPage() {
    location.href = "/products.html";
}
