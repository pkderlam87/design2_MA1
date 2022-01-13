var productLinkButton = document.querySelectorAll("#kitchen");

console.log(productLinkButton);

productLinkButton.forEach(productLinkButton => productLinkButton.addEventListener("click", goToProductPage));

function goToProductPage() {
    location.href = "/products.html";
}