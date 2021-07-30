$(document).ready(function() {
    $("button#topage2").click(function() {
        $("#page1").hide();
        $("#page2").show();
    });
    $("button#topage1").click(function() {
        $("#page2").hide();
        $("#page1").show();
    })

})