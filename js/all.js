$(document).ready(function() {
    // 點擊產品介紹，列表出現
    $('.second-layer').click(function(e) {
        $(this).find('ul').slideToggle();
    });
    //banner使用nivo-slider
    $(window).on('load', function() {
        $('#slider').nivoSlider();
    });
    //Top滾動至最上
    $('.top a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });
    //ad關閉
    $('.close').click(function(e) {
        e.preventDefault();
        $('.ad').hide();
    });

    //logo animated
    $('.logo').mouseover(function(e) {
        $(this).addClass('rubberBand');
    });
    $('.logo').mouseleave(function(e) {
        $(this).removeClass('rubberBand');
    });
    //Lesson animated
    $('.lesson').mouseover(function(e) {
        $(this).addClass('bounce');
    });
    $('.lesson').mouseleave(function(e) {
        $(this).removeClass('bounce');
    });

})