/* JavaScript for WATS 3020 Sandwich Machine Assignment */


//
let bread = prompt("What kind of bread would you like? (white, whole wheat, rye, sourdough, gluten-free wrap)","sourdough");

let meats= prompt("What kind of meat do you want on your sandwich? If you want more than one, please separate your choices with a comma.", "turkey, bacon");

let topping = prompt("What additional toppings would you like to add? Please separate your requests with a comma.","pickles, peppers, spinach");

let condiment = prompt("What condiments would like? Please separate your requests with a comma.","mustard, pesto mayo");



let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meats: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};


let meatArray = meats.split(',');
let toppingArray = topping.split(',');
let condimentArray = condiment.split(',');


let meatCost = meatArray.length * prices.meats;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;


let totalPrice = subtotal + orderTax;




let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meats}</p>
    <p>Toppings: ${topping}</p>
    <p>Condiments: ${condiment}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
