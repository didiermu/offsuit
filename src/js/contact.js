const parallaxContacto = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".contacto .col-lg-2.offset-lg-2", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: ".contacto",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // markers: true,
        },
    })
}

const inputAnim = () => {
    const inputs = document.querySelectorAll(".input_group");
    //  inputs.onclick = (e) => {
    //          console.log("ckk");
    //      }
    //  for (const input of inputs) {
    //      inputs.addEventListener('click', function(e) {
    //          console.log("click");
    //      });
    //  }
    $(".input__group").on('click', function() {
        $(this).addClass("active");
        $(this).find("input").focus();

    })
}

$(function() {
    parallaxContacto();
    inputAnim();

});