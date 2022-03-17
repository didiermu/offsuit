const sliderLogos = () => {

    const swiper = new Swiper('.swiperClientes', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        resizeObserver: true,
        breakpointsInverse: true,
        // autoplay: {
        //     delay: 1,
        //     disableOnInteraction: false
        // },
        // speed: 3000,
        navigation: {
            nextEl: '.swiperClientes .swiper-button-next',
            prevEl: '.swiperClientes .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: "auto",
                allowTouchMove: false,
            },
            320: {
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false
                },
                speed: 500,
                slidesPerView: "auto",
                autoplay: true,
                centeredSlides: true,
            },
        },


        //   // If we need pagination
        //   pagination: {
        //       el: '.swiper-pagination',
        //   },

        //   // Navigation arrows


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