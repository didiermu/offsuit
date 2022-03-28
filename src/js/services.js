$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const cuatro = () => {

        const swiper = new Swiper('.swiperServices', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: "auto",
            allowTouchMove: true,
            mousewheel: false,
            watchOverflow: true,
            preloadImages: true,
            pagination: {
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                clickable: true,
            },

            //   // Navigation arrows
            navigation: {
                nextEl: '.swiper-nav .swiper-button-next',
                prevEl: '.swiper-nav .swiper-button-prev',
            },
            slideActiveClass: 'swiper-slide-active'


        });


        var lastScrollTop = 0;
        // var posSection = $(".clientes").offset().top;

        document.addEventListener(
            "scroll",
            function() {
                var soo = window.pageYOffset || document.documentElement.scrollTop;
                if (soo > lastScrollTop) {
                    // console.log("abajo");
                    // console.log(st.end, lastScrollTop);

                    // ok /////////
                    // if (st.start <= lastScrollTop) {
                    //     // console.log("si");
                    //     swiper.mousewheel.enable();

                    // } else {
                    //     swiper.mousewheel.disable();
                    //     // console.log("no");
                    // }
                    // if (st.end <= lastScrollTop) {
                    //     // console.log("si fin");
                    //     swiper.mousewheel.disable();
                    // }

                    // ^ ok /////////

                    swiper.on("slideChangeTransitionStart", function() {
                        if (swiper.activeIndex == 0) {
                            $(".swiper-nav").attr("data-active", "active-uno");
                        }
                        if (swiper.activeIndex == 1) {
                            $(".swiper-nav").attr("data-active", "active-dos");
                        }
                        if (swiper.activeIndex == 2) {
                            $(".swiper-nav").attr("data-active", "active-tres");
                        }
                        if (swiper.activeIndex == 3) {
                            $(".swiper-nav").attr("data-active", "active-cuatro");
                        }
                    });

                    swiper.on("slideChangeTransitionEnd", function() {
                        if (swiper.isEnd) {
                            swiper.mousewheel.disable();
                        }

                        if (swiper.activeIndex == 1) {
                            $("body").attr("class", "body-servicios-dos");

                        } else if (swiper.activeIndex == 2 || swiper.activeIndex == 3) {
                            $("body").attr("class", "body-servicios-tres");

                        } else {
                            $("body").attr("class", "body-servicios");
                        }
                    });

                    //    ok // if ($(".contacto").hasClass("sectionOn")) {
                    //     swiper.slideTo(0);
                    // }

                } else {
                    // console.log("arriba");

                    var posSection = $(window).scrollTop();
                    if (posSection < 880) {
                        //    ok swiper.mousewheel.enable();
                    }
                    // console.log(posSection);
                }

                // ok lastScrollTop = st <= 0 ? 0 : soo; // For Mobile or negative scrolling
                // lastScrollTop = st <= 0 ? 0 : soo; // For Mobile or negative 
            },
            false
        );

    }

    // sliderPin();
    cuatro();

});