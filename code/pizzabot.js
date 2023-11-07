const vegetarianPizza = "Vegetarian Pizza";
const hawaiianPizza = "Hawaiian Pizza";
const pepperoniPizza = "Pepperoni Pizza";

function greetCustomer() {
  alert(
    `Welcome! We offer a variety of delicious pizzas: ${vegetarianPizza}, ${hawaiianPizza}, and ${pepperoniPizza}.`
  );
}

function getOrderName() {
  let selectedPizza = "";
  let errorMessage = "";

  do {
    let order = prompt(
      `${errorMessage} Please enter the name of the pizza you'd like to order:`
    ).toLowerCase();

    if (
      vegetarianPizza.toLowerCase().includes(order) ||
      hawaiianPizza.toLowerCase().includes(order) ||
      pepperoniPizza.toLowerCase().includes(order)
    ) {
      selectedPizza = order;
    } else {
      errorMessage = "Sorry, that pizza is not on our menu. ";
    }
  } while (selectedPizza === "");

  return selectedPizza;
}

function getOrderQuantity(pizzaName) {
  return prompt(`How many ${pizzaName} pizzas would you like to order?`);
}

function calculateCookingTime(quantity) {
  if (quantity <= 2) {
    alert("Your order will be ready in approximately 10 minutes.");
  } else if (quantity <= 5) {
    alert("Your order will be ready in approximately 15 minutes.");
  } else {
    alert("Your order will be ready in approximately 20 minutes.");
  }
}

function calculateTotalCost(quantity) {
  const pizzaPrice = 80;
  return quantity * pizzaPrice;
}

greetCustomer();
let selectedPizzaName = getOrderName();
let orderedQuantity = getOrderQuantity(selectedPizzaName);
let totalCost = calculateTotalCost(orderedQuantity);
calculateCookingTime(orderedQuantity);
alert(
  `Thank you for your order! We'll prepare ${selectedPizzaName} for you. The total cost is ${totalCost} kr.`
);
