const spend_threshold = 400;
const tax_rate = 0.13;
const phone = 100;
const accessories = 20;
var total = 0;
var subtotal = 0;
var budget = prompt("Please enter your bank account balance");

function taxValue(amount){
    return tax_rate * amount;
}

function formatAmount(amount){
    return "$"+amount.toFixed(2);
}

while (total < budget){
    subtotal +=phone;
    if (subtotal<spend_threshold){
        subtotal+=accessories;
    }
    total = subtotal+taxValue(subtotal);
}

console.log("You spent "+formatAmount(total));
