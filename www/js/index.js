$(function () {
    // body...
    $(".js-login").on("click",function(){
        window.location.href = "../www/dashboard.html";
    });

    $(".js-signup").on("click",function(){
        window.location.href = "../www/signup.html";
    });

    $("#js-back").on("click",function(){
        window.location.href = "../www/index.html";
    });

    $("#js-home").on("click",function(){
        window.location.href = "../www/index.html";
    });
});