// const anclas = () => {
//     $("#navbarNav li").on("click", function() {
//         var nameLi = $(this).attr("id").replace("li-", ""),
//             nameSection = $("#home--" + nameLi).offset().top;

//         $("html, body").animate({
//                 scrollTop: (nameSection = $("#home--" + nameLi).offset().top - 90)
//             },
//             1500
//         );

//         $(".header .btn").attr("aria-expanded", "false");
//         $(".navbar-collapse").removeClass("show");
//         $("body").removeClass("navOn");

//         return false;
//     });
// }

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
        } else if ($(".clientes").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-clients").addClass("active");
        } else if ($(".servicios").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-services").addClass("active");
        } else if ($(".contacto").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-contact").addClass("active");
        }

    }

    sectionFade();

    $(document).scroll(function() {
        sectionFade();
    });
}

$(function() {
    scrollNav();
    //     nav();
    //     // carruseles();
    //     cookies();
    menuMobile();
    //     clouds();


    //     if ($("main").hasClass("home") || $("main").hasClass("como--llegar")) {
    //         anclas();
    //     }

    //     $(window).resize(function() {
    //         menuMobile();
    //     });


});