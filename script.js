/*Create a Github repository for this project.
-You should have a form where a user is able to input the cost of the meal. utilize form tag with input number (currency)
-The form should also let the user choose the percentage tip they want to give. allow user to enter tip amount (percentage)
-When they submit the form, show them the total with tip added. use onClick() event to display total cost with tip figured in
-Display the total tip amount as well so they know how much they're tipping.  in dollars amount, not %

Define a variable that represents cost of meal in U.S. currency
Define a variable that represents tip amount in percentage
Define a variable that stores calculation of tip total: cost * tip (%) = tip amount
Define a variable that stores sum of tip amt and meal cost = total meal cost

*/

let mealCost = document.getElementById("cost").value;
let tip = document.getElementById("tip").value; 
let tipValue = mealCost * (tip/100); //tip total amount
let totalBill = mealCost + tipValue; //total meal cost with tip figured in

function tipCalculator () {
    document.getElementById("tipTotal").innerHTML = `${tipValue}`;
    document.getElementById("tCost").innerHTML = `${totalBill}`;
    console.log(tipValue);
    console.log(totalBill);
}
