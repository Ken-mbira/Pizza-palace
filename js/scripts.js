// User Interface
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
    var pizzaType;
    var pizzaNumber;
    var pizzaSize;
    var pizzaToppings;
    var drinks;
    var mode;
    $("#add-to-cart").click(function() {
        pizzaType = $("input[name=pizza-type]:checked").val();
        pizzaNumber = $("input#item-number").val()
        pizzaSize = $("input[name=pizza-size]:checked").val();
        pizzaToppings = $("input[name=toppings]:checked").val();
        drinks = $("input[name=drinks]:checked").val();
        mode = $("input#location").val();
    })




})

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