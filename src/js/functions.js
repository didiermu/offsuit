const anclas = () => {
    $("#navbarNav li").on("click", function() {
        // var nameLi = $(this).attr("id").replace("li-", ""),
        //     nameSection = $("#" + nameLi).offset().top;

        // $("html, body").animate({
        //     scrollTop: (nameSection = $("#" + nameLi).offset().top - 90)
        // }, 1000);

        $(".header .btn-ham").attr("aria-expanded", "false");
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("nav-on");

        // return false;
    });
}

const menuMobile = () => {
    if ($(window).width() < 992) {
        $("header .btn-ham").on("click", function() {
            $("body").toggleClass("nav-on");
        });
    }
}


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


        const changeUrl = (newHash) => {
            // const nextURL;
            const nextTitle = 'My new page title';
            const nextState = {
                additionalInformation: 'Updated the URL with JS'
            };
            window.history.pushState(nextState, nextTitle, newHash);
            window.history.replaceState(nextState, nextTitle, newHash);

        }



        if ($(".about").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-about").addClass("active");
            $("body").attr("class", "body-about");

            changeUrl("index.html#about");


        } else if ($(".clientes").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-clients").addClass("active");
            $("body").attr("class", "body-clientes");

            changeUrl("index.html#clients");


        } else if ($(".servicios").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-services").addClass("active");
            $("body").attr("class", "body-servicios");

            changeUrl("index.html#services");

        } else if ($(".contacto").hasClass("sectionOn")) {
            $(".header li").removeClass("active");
            $("#li-contact").addClass("active");
            $("body").attr("class", "body-contacto");

            changeUrl("index.html#contact");

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