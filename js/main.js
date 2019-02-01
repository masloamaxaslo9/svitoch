// Function for click button login page Your Happiness
$(document).ready(function(){
    $('.login').on('click', function () {
        $('.login_popap').toggleClass('active');
        $('.mask_popap').toggleClass('active');
        $('.wraper').toggleClass('popap_active');
    })
});
// Function for click on Mask popap login page Your Happiness
$(document).ready(function(){
    $('.mask_popap').on('click', function () {
        $('.login_popap').removeClass('active');
        $('.mask_popap').removeClass('active');
        $('.wraper').removeClass('popap_active');
        $('.title_popap').removeClass('active');
        if($('.actual_adress_popap').hasClass('active')) {
            console.log(this);
            $('.actual_adress_popap').removeClass('active');
        }
    })
});
// Function for click on exit button login page Your Happiness
$(document).ready(function(){
    $('.exit_popap').on('click', function () {
        $('.login_popap').toggleClass('active');
        $('.mask_popap').toggleClass('active');
        $('.wraper').toggleClass('popap_active');
    })
});

$(document).ready(function(){
    // Checkbox on popap login page Your Happiness
    $('.login_popap #data_info').click(function() {
        $(this).parent().find('label').toggleClass('active');
    });
    // Function for click on link Facebook/Google+ popap login
    $('.login_popap .button_social_link').click(function() {
        $('body').find('.actual_adress_popap').toggleClass('active');
        $('body').find('.login_popap').removeClass('active');
    });
    // Function for click on link 'YES' popap Actual Adress page Your Happiness
    $('.actual_adress_popap .yes').on('click', function() {
        $(this).removeClass('yes').addClass('open_email');
        $(this).parent().parent().find('.button_confirm').eq(1).addClass('closed');
        $('.actual_adress_popap').find('.title_popap').addClass('active');
    });
});
