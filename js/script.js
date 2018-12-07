
//script for drop-down menu//
$('#first,.first_arrow').click(function() {
    $('.first_list').toggleClass('is-active');
    $('.first_arrow').toggleClass('rotate');
    $('#first').toggleClass('is-active');
});
$('#second,.second_arrow').click(function() {
    $('.second_list').toggleClass('is-active');
    $('.second_arrow').toggleClass('rotate');
    $('#second').toggleClass('is-active');
});
$('#third,.third_arrow').click(function() {
    $('.third_list').toggleClass('is-active');
    $('.third_arrow').toggleClass('rotate');
    $('#third').toggleClass('is-active');
});
$('#fourth,.fourth_arrow').click(function() {
    $('.fourth_list').toggleClass('is-active');
    $('.fourth_arrow').toggleClass('rotate');
    $('#fourth').toggleClass('is-active');
});

//script for burger menu//

$('.burger').click(function() {
    $('.burger__item').toggleClass('is-active');
    $('.header__nav ').toggleClass('is-hiden');
});
 $('.header__nav').click(function () {
    $('.burger__item').removeClass('is-active');
    $('.header__nav ').removeClass('is-hiden');
});



//function for popUp
$('.btn_popup').click (function () {
   $('.pop_up').addClass('active');
});
$('.pop_up').click(function () {
    $('.pop_up').removeClass('active');
});





