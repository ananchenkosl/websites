Fancybox.bind("[data-fancybox]", {});

const mixer = mixitup('.directions__list');

allFilteredButtons = document.querySelectorAll('.directions__filter-btn');
allFilteredButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        allFilteredButtons.forEach(btn => {
            btn.classList.remove('directions__filter-btn--active')
        });
        event.target.classList.add('directions__filter-btn--active');
    });
});


$('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                draggable: true,
            },
        },
    ]
});

$('.team__slider-arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
});
$('.team__slider-arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
});




$('.testimonials__slider').slick({
    arrows: false,
    dots: true,
});

$('.testimonials_prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
});
$('.testimonials_next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
});

$('.program__acc-link').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('program__acc-link--active');
    $(this).children('.program__acc-text').slideToggle();
});

$(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
    e.preventDefault()
    const id = $(this).attr('href'),
        top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
});



setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0)
$('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
})

$('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
})