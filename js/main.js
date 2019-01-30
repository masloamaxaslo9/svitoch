// Function for click button login page Your Happiness
$(document).ready(function(){
    $('.login').on('click', function () {
        console.log('func 1');
        $('.login_popap').toggleClass('active');
        $('.mask_popap').toggleClass('active');
        $('.wraper').toggleClass('popap_active');
    })
});
// Function for click on Mask popap login page Your Happiness
$(document).ready(function(){
    $('.mask_popap').on('click', function () {
        console.log('func 2');
        $('.login_popap').toggleClass('active');
        $('.mask_popap').toggleClass('active');
        $('.wraper').toggleClass('popap_active');
    })
});
// Function for click on Mask popap login page Your Happiness
$(document).ready(function(){
    $('.exit_popap').on('click', function () {
        console.log('func 2');
        $('.login_popap').toggleClass('active');
        $('.mask_popap').toggleClass('active');
        $('.wraper').toggleClass('popap_active');
    })
});

$('.login_popap #data_info').click(function() {
    $(this).parent().find('label').toggleClass('active');
});