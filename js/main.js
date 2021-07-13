$(window).ready(function () {

    // WOW JS INITIALIZATION
    new WOW().init();

    // TESTEMONIAL CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        animateIn: 'flipInX',
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    const menuIcon = $('#menuIcon');
    const sidebar = $('.sidebar');
    const closeSidebarbtn = $('.sidebar-close');
    menuIcon.on('click', () => {
        sidebar.removeClass('hide');
    });

    closeSidebarbtn.on('click', () => {
        sidebar.addClass('hide');
    })
});