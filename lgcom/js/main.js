$(function(){
    $('.h_left button').click(function(){
        $(this).hide().siblings().show();
        $('header .mobile_nav').toggle();
    });
});