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



})