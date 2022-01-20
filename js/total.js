
const quantities = document.querySelector("#quantities");
const totalNumber = document.querySelector("#total_number");
const price = 20;
totalNumber.innerHTML = `${price} Nok`;

quantities.addEventListener("change", (event) => {
    totalNumber.innerHTML = "";
    totalNumber.innerHTML = ` ${price * parseInt(event.target.value)} Nok`;
});