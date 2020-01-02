$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar')
        } else {
            $('.nav-menu').removeClass('custom-navbar')
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 280) {
            $('.salad-img').addClass('from-left')
            $('.mission-text').addClass('from-right')
        } else {
            $('.salad-img').removeClass('from-left')
            $('.mission-text').removeClass('from-right')
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        console.log(position)
        if (position >= 2700) {
            $('#card1').addClass('fly-left')
            $('#card2').addClass('rise-up')
            $('#card3').addClass('fly-right')
        } else {
            $('#card1').removeClass('fly-left')
            $('#card2').removeClass('rise-up')
            $('#card3').removeClass('fly-right')
        }
    });

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300)
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300)
        }
    });
    
    $('.gallery-list-item').click(function() {
        $(this).addClass('gallery-item-active').siblings().removeClass('gallery-item-active')
    });
});