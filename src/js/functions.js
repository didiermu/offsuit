const anclas = () => {
    $("#navbarNav li").on("click", function() {

        $(".header .btn-ham").attr("aria-expanded", "false");
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("nav-on");

    });
}

const menuMobile = () => {
    if ($(window).width() < 992) {
        $("header .btn-ham").on("click", function() {
            $("body").toggleClass("nav-on");
        });
    }
}

// //event scroll up/down
// const nav = () => {
//     var lastScrollTop = 0;

//     document.addEventListener(
//         "scroll",
//         function() {
//             var st = window.pageYOffset || document.documentElement.scrollTop;
//             if (st > lastScrollTop) {
//                 $(".header").addClass("nav-on ");
//             } else {
//                 $(".header").removeClass("nav-on ");
//             }
//             lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//         },
//         false
//     );
// }



const scrollNav = () => {
    function sectionFade() {
        var sectionFade = $("section");
        sectionFade.each(function() {
            var mediaqueryList = window.matchMedia("(max-width: 992px)");
            if (mediaqueryList.matches) {
                var posSection = $(this).offset().top - 600;
                //console.log("mobile home")
            } else {
                var posSection = $(this).offset().top - 100;
                //console.log("d home");
            }

            //var posSection = $(this).offset().top - 300;
            var scrolleo = $(window).scrollTop();

            if (scrolleo > posSection) {
                $("section").removeClass("sectionOn");
                $(this).addClass("sectionOn");
            }
        });

        if ($(".about").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-about").addClass("active");
            $("body").attr("class", "body-about");
        } else if ($(".clientes").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-clients").addClass("active");
            $("body").attr("class", "body-clientes");
        } else if ($(".servicios").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-services").addClass("active");
            $("body").attr("class", "body-servicios");
        } else if ($(".contacto").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-contact").addClass("active");
            $("body").attr("class", "body-contacto");

        }

    }

    sectionFade();

    $(document).scroll(function() {
        sectionFade();
    });
}

$(function() {
    scrollNav();
    menuMobile();
    anclas();

});