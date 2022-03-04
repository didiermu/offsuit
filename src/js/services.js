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
            mousewheel: false,
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


        // swiper.mousewheel.disable();

        window.onscroll = function(e) {
            this.oldScroll = this.scrollY;

            if ($(".servicios").hasClass("sectionOn")) {
                // swiper.slideTo(0);
                swiper.mousewheel.enable();
            }

            if (st.progress > 0) {
                swiper.mousewheel.enable();
                console.log("si");
            }
            if (st.progress < 1) {
                swiper.mousewheel.disable();
                console.log("no");
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
            mousewheel: false,
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



        // window.onscroll = function(e) {
        //     // if ($(".about").hasClass("sectionOn") || $(".clientes").hasClass("sectionOn") || $(".contacto").hasClass("sectionOn")) {
        //     //     swiper.mousewheel.enable();

        //     // }
        //     if ($(".servicios").hasClass("sectionOn")) {
        //         swiper.mousewheel.enable();
        //     }
        //     this.oldScroll = this.scrollY;
        // }

        // swiper.on("slideChangeTransitionEnd", function() {
        //     if (swiper.isEnd || swiper.isBeginning) {
        //         // console.log("fin");
        //         swiper.mousewheel.disable();
        //     }

        //     if (swiper.activeIndex == 1) {
        //         $("body").attr("class", "body-servicios-dos");
        //     } else {
        //         $("body").attr("class", "body-servicios");
        //     }
        // });
        // console.log(swiper.activeIndex);

        var lastScrollTop = 0;
        // var posSection = $(".clientes").offset().top;

        document.addEventListener(
            "scroll",
            function() {
                var soo = window.pageYOffset || document.documentElement.scrollTop;
                if (soo > lastScrollTop) {
                    // console.log("abajo");

                    swiper.on("slideChangeTransitionEnd", function() {
                        if (swiper.isEnd) {
                            swiper.mousewheel.disable();
                        }

                        if (swiper.activeIndex == 1) {
                            $("body").attr("class", "body-servicios-dos");
                        } else {
                            $("body").attr("class", "body-servicios");
                        }
                    });

                    if ($(".contacto").hasClass("sectionOn")) {
                        swiper.slideTo(0);
                    }

                } else {
                    // console.log("arriba");
                    var posSection = $(window).scrollTop();
                    if (posSection < 880) {
                        swiper.mousewheel.enable();
                    }
                    // console.log(posSection);
                }

                lastScrollTop = st <= 0 ? 0 : soo; // For Mobile or negative scrolling
            },
            false
        );

    }

    // sliderPin();
    cuatro();

});