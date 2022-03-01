const sliderLogos = () => {

    const swiper = new Swiper('.swiperClientes', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        slidesPerView: "auto",
        speed: 3000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
        allowTouchMove: false,

        //   // If we need pagination
        //   pagination: {
        //       el: '.swiper-pagination',
        //   },

        //   // Navigation arrows
        //   navigation: {
        //       nextEl: '.swiper-button-next',
        //       prevEl: '.swiper-button-prev',
        //   },

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
    }).to('.clientes__item', {
        opacity: 1,
        yPercent: -50,
    })

}


$(function() {
    parallax();
    sliderLogos();
});