const sliderLogos = () => {

    const swiper = new Swiper('.swiperClientes', {

        direction: 'horizontal',
        loop: true,
        // grabCursor: true,
        // resizeObserver: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiperClientes .swiper-button-next',
            prevEl: '.swiperClientes .swiper-button-prev',
        },
        breakpoints: {
            768: {
                mousewheelControl: true,
                keyboardControl: true,
                slidesPerView: "auto",
                allowTouchMove: false,
                speed: 8000,
            },
            320: {
                slidesPerView: "auto",
                centeredSlides: true,
                allowTouchMove: true,
                // autoplay: {
                //     delay: 1,
                //     disableOnInteraction: false
                // },
                speed: 5000,
            },
        },
    });
}

const parallax = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            scrub: true,
            start: "+=300",
            endTrigger: '.clientes',
            end: 'center center',
            ease: "ease",

        }
    })

    tl.from('.clientes__item', {
        opacity: 0,
        yPercent: 50,
    }).to('.clientes__item .col-lg-4', {
        opacity: 1,
        yPercent: -50,
    })

}


$(function() {
    parallax();
    sliderLogos();
});