$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const sliderPin = () => {

        let st = ScrollTrigger.create({
            trigger: ".servicios",
            pin: true,
            start: "top top",
            // end: "+=3000",
            // endTrigger: ".contacto",
            end: "bottom center",
            markers: true,

        });

        const swiper = new Swiper('.swiperServices', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: "auto",
            allowTouchMove: true,
            // mousewheel: true,
            watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                clickable: true,
            },

            //   // Navigation arrows
            //   navigation: {
            //       nextEl: '.swiper-button-next',
            //       prevEl: '.swiper-button-prev',
            //   },

        });



        window.onscroll = function(e) {
            this.oldScroll = this.scrollY;

            if ($(".about").hasClass("sectionOn") || $(".clientes").hasClass("sectionOn") || $(".contacto").hasClass("sectionOn")) {
                // swiper.slideTo(0);
                // swiper.mousewheel.enable();
            }

            if (st.progress > 0) {
                swiper.mousewheel.enable();
            }
            if (st.progress < 1) {
                swiper.mousewheel.disable();
            }
            // console.log(st.progress)
            swiper.on("slideChangeTransitionEnd", function() {
                if (swiper.isEnd || swiper.isBeginning) {
                    // console.log("fin");
                    swiper.mousewheel.disable();
                    console.log(st.progress);
                }
            });
        }


        // console.log(swiper.activeIndex);

        // var lastScrollTop = 0;
        // document.addEventListener(
        //     "scroll",
        //     function() {
        //         var soo = window.pageYOffset || document.documentElement.scrollTop;
        //         if (soo > lastScrollTop) {
        //             console.log("abajo");
        //             // console.log(st.progress);
        //             // valores();


        //         } else {
        //             console.log("arriba");
        //             // console.log(st.progress);
        //             // valores();

        //         }
        //         lastScrollTop = st <= 0 ? 0 : soo; // For Mobile or negative scrolling
        //     },
        //     false
        // );
        // console.log(st);
    }

    const cuatro = () => {
        let fijo = true;
        let st = ScrollTrigger.create({
            trigger: ".servicios",
            pin: true,
            start: "top top",
            // end: "+=3000",
            // endTrigger: ".contacto",
            end: "bottom center",
            // markers: true,

        });
        const swiper = new Swiper('.swiperServices', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: "auto",
            allowTouchMove: true,
            mousewheel: true,
            watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                clickable: true,
            },

            //   // Navigation arrows
            //   navigation: {
            //       nextEl: '.swiper-button-next',
            //       prevEl: '.swiper-button-prev',
            //   },

        });



        window.onscroll = function(e) {
            if ($(".about").hasClass("sectionOn") || $(".clientes").hasClass("sectionOn") || $(".contacto").hasClass("sectionOn")) {

                // swiper.slideTo(0);
                swiper.mousewheel.enable();

            }
            this.oldScroll = this.scrollY;
        }

        swiper.on("slideChangeTransitionEnd", function() {
            if (swiper.isEnd || swiper.isBeginning) {
                // console.log("fin");
                swiper.mousewheel.disable();
            }

            // console.log(swiper.activeIndex);
            // if (swiper.activeIndex == 3) {
            //     // swiper.mousewheel.disable();
            //     console.log("desactivada")

            // } else {
            //     // swiper.mousewheel.enabled();
            //     console.log("activada");
            // }
        });
        // console.log(swiper.activeIndex);

        // var lastScrollTop = 0;
        // document.addEventListener(
        //     "scroll",
        //     function() {
        //         var soo = window.pageYOffset || document.documentElement.scrollTop;
        //         if (soo > lastScrollTop) {
        //             console.log("abajo");
        //             // console.log(st.progress);
        //             // valores();


        //         } else {
        //             console.log("arriba");
        //             // console.log(st.progress);
        //             // valores();

        //         }
        //         lastScrollTop = st <= 0 ? 0 : soo; // For Mobile or negative scrolling
        //     },
        //     false
        // );
        // console.log(st);
    }

    // sliderPin();
    cuatro();

});