$(document).ready(function(){
    $('.toggle-collapse').click(function(){
        $('.nav-items').css({"transform": "translateX(0%)"});
        $('.box').css({"transform": "rotateY(25deg)"});
        $('.box').css({"margin-left": "250px"});
    });

    $('.toggle-times').click(function(){
        $('.nav-items').css({"transform": "translateX(-100%)"});
        $('.box').css({"transform": "rotateY(0)"});
        $('.box').css({"margin-left": "0px"});
    });
})