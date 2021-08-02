// User Interface

var pizzaType;
var pizzaNumber;
var pizzaSize;
var pizzaToppings;
var drinks;
var mode;
var price;

$(document).ready(function() {
    $(".topage2").click(function() {
        $("#page1").hide();
        $("#page3").hide();
        $("#page2").show();
        $(".topage1").show();
    })
    $(".topage1").click(function() {
        $(".topage1").hide();
        $("#page3").hide();
        $("#page2").hide();
        $("#page1").show();
    })
    $(".dropdown-content").hover(function() {
        $("#pizza-choice").show();
    }, function() {
        $("#pizza-choice").hover(function() {
            $("#pizza-choice").show();
        }, function() {
            $("#pizza-choice").hide();
        });
    })
    $("button.add-item").click(function() {
        $("#page2").hide();
        $("#page3").show();
        $(".topage1").show();
    })
    $("#page1").show(function() {
        $(".topage1").hide();
    })
    $("#add-to-cart").click(function() {
        $(".cart").show();
    })
    $("#delivery").change(function() {
        $("#delivery-option").show();
    })
    $("#pickup").change(function() {
        $("#delivery-option").hide();
    })
    $("[name=pizza-type]").change(function() {
        var pizzaType = $("input[name=pizza-type]:checked").val();
        $("#name-of-pizza").html(pizzaType);
    })

    $("#add-to-cart").click(function() {
        pizzaType = $("input[name=pizza-type]:checked").val();
        pizzaNumber = parseInt($("input#item-number").val());
        pizzaSize = $("input[name=pizza-size]:checked").val();
        pizzaToppings = $("input[name=toppings]:checked").val();
        drinks = $("input[name=drinks]:checked").val();
        mode = $("input[name=mode]:checked").val();
    })
})

var myFunction = () => {
    function PizzaChoice(pizzaType, pizzaNumber, pizzaSize, pizzaToppings, drinks, mode, price) {
        this.pizzaType = pizzaType;
        this.pizzaNumber = pizzaNumber;
        this.pizzaSize = pizzaSize;
        this.pizzaToppings = pizzaToppings;
        this.drinks = drinks;
        this.mode = mode;
        this.price = price;
    }

    var pricer = () => {
        var pricer1 = () => {
            if (pizzaType === "Cheese") {
                price = 500;
                return price;
            } else if (pizzaType === "Veggie") {
                price = 450;
                return price;
            } else if (pizzaType === "Meat") {
                price = 950;
                return price;
            } else if (pizzaType === "Pepperoni") {
                price = 10000;
                return price;
            } else if (pizzaType === "Margherita") {
                price = 550;
                return price;
            } else if (pizzaType === "Hawaiian") {
                price = 1250;
                return price;
            } else if (pizzaType === "Buffalo") {
                price = 700;
                return price;
            } else if (pizzaType === "Greek") {
                price = 850;
                return price;
            }
        }
        pricer1();

        var pricer2 = () => {
            if (pizzaToppings === "Pepperoni") {
                price = price + 100;
                return price;
            } else if (pizzaToppings === "Mushrooms") {
                price = price + 150;
                return price;
            } else if (pizzaToppings === "Onions") {
                price = price + 90;
                return price
            } else {
                price = price;
                return price;
            }
        }
        pricer2();

        var pricer3 = () => {
            if (pizzaSize === "Large") {
                price = price + 100;
                return price;
            } else if (pizzaSize === "Medium") {
                price = price + 50;
                return price;
            } else {
                price = price;
                return price;
            }
        }
        pricer3();

        var pricer4 = () => {
            if (drinks === "Soda") {
                price = price + 100;
                return price;
            } else if (drinks === "Juice") {
                price = price + 150;
                return price;
            } else {
                price = price;
                return price;
            }
        }
        pricer4();

        var pricer5 = () => {
            if (mode === "Delivery") {
                price = price + 200;
                return price;
            } else {
                price = price;
                return price;
            }
        }
        pricer5();

        var pricer6 = () => {
            price = price * pizzaNumber;
            return price;
        }
        pricer6();
        alert(price)
    }
    pricer();
}

// Business Logic 

// function PizzaType(pizzaName, pizzaPrice) {
//     this.pizzaName = pizzaName;
//     this.pizzaPrice = pizzaPrice;
// }

// var cheeseType = new PizzaType("cheese", 500);
// var veggieType = new PizzaType("veggie", 450);
// var meatType = new PizzaType("meat", 950);
// var pepperoniType = new PizzaType("pepperoni", 1000);
// var margheritaType = new PizzaType("margherita", 550);
// var hawaiianType = new PizzaType("margherita", 1250);
// var buffaloType = new PizzaType("buffalo", 700);
// var greekType = new PizzaType("greek", 850);

// function PizzaSize(sizeName, sizePrice) {
//     this.sizeName = sizeName;
//     this.sizePrice = sizePrice;
// }

// var sizeLarge = new PizzaSize("large", 100);
// var sizeMedium = new PizzaSize("medium", 0);
// var sizeSmall = new PizzaSize("small", -50);

// function ToppingType(toppingName, toppingPrice) {
//     this.name = toppingName;
//     this.price = toppingPrice;
// }

// var pepperoniTopping = new ToppingType("pepperoni", 100);
// var mushroomTopping = new ToppingType("mushroom", 150);
// var onionTopping = new ToppingType("onion", 90);

// function DrinkType(drinkName, drinkPrice) {
//     this.drinkName = drinkName;
//     this.drinkPrice = drinkPrice;
// }

// var sodaDrink = new DrinkType("soda", 50);
// var juiceDrink = new DrinkType("juice", 100);