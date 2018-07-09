function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Pizza.prototype.price = function() {
  var price = 0;
  if(this.pizzaSize === "small") {
    price += (7 * this.pizzaQuantity) + ((this.pizzaToppings * this.pizzaQuantity) * .50);
  } else if (this.pizzaSize === "medium") {
    price += (11 * this.pizzaQuantity) + ((this.pizzaToppings * this.pizzaQuantity) * 1);
  } else if (this.pizzaSize === "large") {
    price += (14 * this.pizzaQuantity) + ((this.pizzaToppings * this.pizzaQuantity) * 1.50);
  } else {

  } return price;
}

module.exports = {Contact, Pizza};
