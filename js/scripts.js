//Business Interface
var pizzaType;
var pizzaNumber;
var pizzaSize;
var pizzaToppings;
var drinks;
var mode;
var price;
var namePrice;
var numberPrice;
var sizePrice;
var toppingPrice;
var drinkPrice;
var crustPrice;


//User Interface

$(document).ready(function() {

    $(".topage2").click(function() {
        $("#page1").hide();
        $("#page3").hide();
        $("#page4").hide();
        $("#page2").show();
        $(".topage1").show();
    })
    $(".topage1").click(function() {
        $(".topage1").hide();
        $("#page4").hide();
        $("#page3").hide();
        $("#page2").hide();
        $("#page1").show();
    })
    $("button.add-item").click(function() {
        $("#page2").hide();
        $("#page3").show();
        $(".topage1").show();
    })
    $("#cheese-add").click(function() {
        $("#name-of-pizza").html("Cheese")
        pizzaType = "Cheese"
    })
    $("#veggie-add").click(function() {
        $("#name-of-pizza").html("Veggie")
        pizzaType = "Veggie"
    })
    $("#meat-add").click(function() {
        $("#name-of-pizza").html("Meat")
        pizzaType = "Meat"
    })
    $("#pepperoni-add").click(function() {
        $("#name-of-pizza").html("Pepperoni")
        pizzaType = "Pepperoni"
    })
    $("#margherita-add").click(function() {
        $("#name-of-pizza").html("Margherita")
        pizzaType = "Margherita"
    })
    $("#hawaiian-add").click(function() {
        $("#name-of-pizza").html("Hawaiian")
        pizzaType = "Hawaiian"
    })
    $("#buffalo-add").click(function() {
        $("#name-of-pizza").html("Buffalo")
        pizzaType = "Buffalo"
    })
    $("#greek-add").click(function() {
        $("#name-of-pizza").html("Greek")
        pizzaType = "Greek"
    })
    $("#page1").show(function() {
        $(".topage1").hide();
    })
    $("#delivery").change(function() {
        $("#delivery-option").show();
    })
    $("#pickup").change(function() {
        $("#delivery-option").hide();
    })
    $("#add-to-cart").click(function() {
        $(".cart").show();
        pizzaNumber = parseInt($("input#item-number").val());
        pizzaSize = $("input[name=pizza-size]:checked").val();
        pizzaToppings = $("input[name=toppings]:checked").val();
        crust = $("input[name=crust]:checked").val();
        drinks = $("input[name=drinks]:checked").val();
        mode = $("input[name=mode]:checked").val();
    })
    $(".cart").click(function() {
        $("#page1").hide();
        $("#page2").hide();
        $("#page3").hide();
        $("#page4").show();
    })
    $("#add-to-cart").last().click(function() {
        $("#name-log").text(pizzaType);

        $("#number-log").text(pizzaNumber);
        $("#size-log").text(pizzaSize);
        $("#topping-log").text(pizzaToppings);
        $("#drink-log").text(drinks);
        $("#crust-log").text(crust)
        myFunction();
        $("#price-log").text(price);
        $("#name-price-log").text(namePrice);
        $("#number-price-log").text(numberPrice);
        $("#size-price-log").text(sizePrice);
        $("#topping-price-log").text(toppingPrice);
        $("#drink-price-log").text(drinkPrice);
        $("#crust-price-log").text(crustPrice);


    })
    $("#payment").click(function() {
        $("#alert").slideDown();
        if (mode === "Delivery") {
            $("#if-delivery").show();
        } else {
            $("#if-pickup").show();
        }
        var location = $("#location").val();
        $("#delivery-location").text(location + ".");
    })
})


var myFunction = () => {
    // function PizzaChoice(pizzaType, pizzaNumber, pizzaSize, pizzaToppings, drinks, mode, price) {
    //     this.pizzaType = pizzaType;
    //     this.pizzaNumber = pizzaNumber;
    //     this.pizzaSize = pizzaSize;
    //     this.pizzaToppings = pizzaToppings;
    //     this.drinks = drinks;
    //     this.mode = mode;
    //     this.price = price;
    // }
    if ((pizzaNumber < 1) || isNaN(pizzaNumber)) {
        alert("Please enter the number of items you want.")
    } else {
        var pricer = () => {
            var pricer1 = () => {
                if (pizzaType === "Cheese") {
                    price = 500;
                    namePrice = 500;

                    return price;
                } else if (pizzaType === "Veggie") {
                    price = 450;
                    namePrice = 450;
                    return price;
                } else if (pizzaType === "Meat") {
                    price = 950;
                    namePrice = 950;
                    return price;
                } else if (pizzaType === "Pepperoni") {
                    price = 1000;
                    namePrice = 1000;
                    return price;
                } else if (pizzaType === "Margherita") {
                    price = 550;
                    namePrice = 550;
                    return price;
                } else if (pizzaType === "Hawaiian") {
                    price = 1250;
                    namePrice = 1250;
                    return price;
                } else if (pizzaType === "Buffalo") {
                    price = 700;
                    namePrice = 700;
                    return price;
                } else if (pizzaType === "Greek") {
                    price = 850;
                    namePrice = 850;
                    return price;
                }
            }
            pricer1();

            var pricer2 = () => {
                if (pizzaSize === "Large") {
                    price = price + 100;
                    sizePrice = 100;
                    return price;
                } else if (pizzaSize === "Medium") {
                    price = price + 50;
                    sizePrice = 50;
                    return price;
                } else {
                    price = price;
                    sizePrice = 0;
                    return price;
                }
            }
            pricer2();
            var pricer3 = () => {
                if (pizzaToppings === "Pepperoni") {
                    price = price + 100;
                    toppingPrice = 100;
                    return price;
                } else if (pizzaToppings === "Mushrooms") {
                    price = price + 150;
                    toppingPrice = 150;
                    return price;
                } else if (pizzaToppings === "Onions") {
                    price = price + 90;
                    toppingPrice = 90;
                    return price
                } else {
                    price = price;
                    toppingPrice = 0;
                    return price;
                }
            }
            pricer3();

            var pricer4 = () => {
                if (crust === "Stuffed") {
                    price = price + 100;
                    crustPrice = 100;
                    return price;
                } else if (crust === "Cracker") {
                    price = price + 200;
                    crustPrice = 200;
                    return price;
                } else if (crust === "Flat") {
                    price = price + 150;
                    crustPrice = 150;
                    return price;
                } else if (crust === "Thin") {
                    price = price + 80;
                    crustPrice = 80;
                    return price;
                } else {
                    price = price;
                    crustPrice = "none chosen";
                    return price;
                }
            }
            pricer4();

            var pricer5 = () => {
                if (drinks === "Soda") {
                    price = price + 100;
                    drinkPrice = 100;
                    return price;
                } else if (drinks === "Juice") {
                    price = price + 150;
                    drinkPrice = 150;
                    return price;
                } else {
                    price = price;
                    drinkPrice = "no drink"
                    return price;
                }
            }
            pricer5();

            var pricer6 = () => {
                if (mode === "Delivery") {
                    price = price + 200;
                    return price;
                } else {
                    price = price;
                    return price;
                }
            }
            pricer6();
            var pricer7 = () => {
                price = price * pizzaNumber;
                numberPrice = namePrice * pizzaNumber;
                return price;
            }
            pricer7();
            alert("You can check out at the top now!")
        }
        pricer()
    }
}