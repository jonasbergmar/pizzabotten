// Här gör jag variabler för att kunna hämta html element efter ID.
const inputPizza = document.getElementById("choosePizza");
const inputQuantity = document.getElementById("chooseQuantity");
const submitButton = document.getElementById("submitBtn");
const totalCostResult = document.getElementById("totalCostResult");
const pizzaResult = document.getElementById("pizzaResult"); // Lade till denna rad

// Definierar namn för olika pizzor med variabler.
const vegetarianPizza = "Vegetarian";
const hawaiianPizza = "Hawaiian";
const pepperoniPizza = "Pepperoni";

// Funktion för att validera vilket val av pizza som görs
inputPizza.addEventListener("change", function () {
  let chosenPizza = inputPizza.value;

  if (
    chosenPizza === vegetarianPizza ||
    chosenPizza === hawaiianPizza ||
    chosenPizza === pepperoniPizza
  ) {
    pizzaResult.value = `Your choice of pizza: ${chosenPizza}`; // Uppdatera pizzaResultatet
  }
});

// Funktion för att beräkna beredningstiden beroende på antalet pizzor
function calculateCookingTime() {
  const quantity = inputQuantity.value;
  let cookingTime = "";

  if (quantity <= 2) {
    cookingTime = "10 min";
  } else if (quantity <= 5) {
    cookingTime = "15 min";
  } else if (quantity <= 10) {
    cookingTime = "45 min";
  } else {
    cookingTime = "Call and ask!";
  }

  // Uppdaterar HTML ID "cookingTimeResult" med beredningstiden
  const cookingTimeResult = document.getElementById("cookingTimeResult");
  cookingTimeResult.value = `Cooking time: ca ${cookingTime}`;
  //reusltatet av det antal som väljs ger Cooking time: ca  och svaret från if satsen ger cookingTime
}

// Funktion för att beräkna den totala kostnaden baserat på antalet pizzor
function calculateTotalCost(quantity) {
  const pizzaPrice = 80;
  return quantity * pizzaPrice;
}

// Lägg till en eventListener för input för antal pizzor för att beräkna och visa total kostnad
// inputQuantity lyssnar på värdet som användaren lägger in.
inputQuantity.addEventListener("input", function () {
  const quantity = inputQuantity.value;
  //If sats som returnerar `Total cost: ${totalCost} sek` om den har fått värden.
  if (quantity) {
    const totalCost = calculateTotalCost(quantity);
    totalCostResult.value = `Total cost: ${totalCost} sek`;
  }
});

// Lägger till en "klick" på "submit"-knappen
submitButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // After validating and calculating, show a confirmation dialog
  const totalCost = calculateTotalCost(inputQuantity.value);

  const confirmationMessage = `Thank you for your order of ${inputQuantity.value} ${inputPizza.value} pizza! Total cost is: ${totalCost} sek`;

  // Display the dialog and set its content
  const confirmationDialog = document.getElementById("confirmationDialog");
  const dialogText = document.getElementById("dialogText");
  dialogText.textContent = confirmationMessage;

  // Show the dialog
  confirmationDialog.showModal();
});

// Handle the close button in the dialog
const closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent any default action (e.g., form submission)

  const confirmationDialog = document.getElementById("confirmationDialog");
  confirmationDialog.close();
});
