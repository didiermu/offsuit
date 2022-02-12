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

// const menuMobile = () => {
//     if ($(window).width() < 992) {
//         $("header .btn").on("click", function() {
//             $("body").toggleClass("navOn");
//         });

//         $(".submenu")
//             .after()
//             .on("click", function() {
//                 $(this).toggleClass("active");
//             });
//     }
// }

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

// const carruseles = () => {
//     const swiper = new Swiper(".swiper-container", {
//         direction: "horizontal",
//         autoplay: true,
//         loop: true,
//         breakpoints: {
//             320: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//                 centeredSlidesBounds: false,
//             },
//             992: {
//                 slidesPerView: "auto",
//                 spaceBetween: 50,
//                 centeredSlidesBounds: true,
//             },
//         },
//     });
// }

// function cookies() {
//     if (localStorage.getItem("cookie")) {
//         $("#msjCookies").remove();
//         $(".detalle-internas--section").addClass("no-cookie");
//     }

//     $(".closeCookie").on("click", function() {
//         localStorage.setItem("cookie", "true");
//         $("#msjCookies").remove();
//         $(".detalle-internas--section").addClass("no-cookie");
//     });
// }

// // parallax nubes
// const clouds = () => {
//     gsap.to(".cloud", {
//         yPercent: -400,
//         ease: "none",
//         scrollTrigger: {
//             trigger: "main",
//             start: "top top",
//             end: "bottom top",
//             scrub: 1,
//         },
//     });
// };

// // consulta de json con info de artistas
// const artistas = (indexArtista) => {
//     $.getJSON("../js/artistas.json", function(data) {

//         $.each(data, function(key, val) {
//             $("title").text("Pulso GNP 2022 - " + data[indexArtista].__1);
//             $("#titleArtista").text(data[indexArtista].__1);
//             $("#descArtista").text(data[indexArtista].__2);

//             $("#imgArtistaWebp").attr("srcset", "../img/artistas/" + data[indexArtista].__10);
//             $("#imgArtista").attr("src", "../img/artistas/" + data[indexArtista].__11);
//             $("#linkFb").attr("href", data[indexArtista].__3);
//             $("#linkTwitter").attr("href", data[indexArtista].__4);
//             $("#linkInsta").attr("href", data[indexArtista].__5);
//             $("#linkSpotify").attr("href", data[indexArtista].__8);
//             $("#linkYt").attr("href", data[indexArtista].__7);
//             $("#linkWeb").attr("href", data[indexArtista].__6);
//             $("#linkTiktok").attr("href", data[indexArtista].__9);
//             return false;
//         });
//     });

//     // ocultar links vacios
//     setTimeout(function() {
//         $(".artista__info--redes a").each(function() {
//             $(this).attr("href") == "" ? $(this).hide() : $(this).show();
//         });
//     }, 100);

// };



// $(function() {
//     nav();
//     // carruseles();
//     cookies();
//     menuMobile();
//     clouds();


//     if ($("main").hasClass("home") || $("main").hasClass("como--llegar")) {
//         anclas();
//     }

//     $(window).resize(function() {
//         menuMobile();
//     });
// });