const parallaxContacto = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".col-lg-2.offset-lg-2", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: ".servicios",
            start: "top top",
            // end: "bottom bottom",
            scrub: 1,
            // markers: true,
        },
    })
}

const inputAnim = () => {

    $(".input__group").on("click", function() {
        $(this).find("input").focus();
    })

    $(".input__group input, .input__group textarea").focus(function() {
        if ($(this).val().length >= 0) {
            $(this).parents(".input__group").addClass("active");
        } else {
            $(this).parents(".input__group").removeClass("active");
        }
    })

    $(".input__group input, .input__group textarea").blur(function() {

        if ($(this).val().length == 0) {
            $(this).parents(".input__group").removeClass("active");
        } else {
            $(this).parents(".input__group").addClass("active");
        }
    })
}

/// EMAIL

function valMail(nameInput) {
    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validNumbre = regEx.test(nameInput.val());

        if (!validNumbre) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> Verifica el formato de email </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }
}

/// TEXTO

function valText(nameInput) {

    var regEx = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var validText = regEx.test(nameInput.val());

    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {
        nameInput.siblings("span").remove();

        if (!validText) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> Solo se aceptan letras </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }


}

/// NUMEROS

function valNum(nameInput) {
    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {

        var regEx = /^[0-9]+$/;

        var validEmail = regEx.test(nameInput.val());

        if (!validEmail) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> Solo se permiten numeros </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }
}

/// TEXTO Y NUMERO

function valTextNum(nameInput) {

    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {
        nameInput.siblings("span").remove();
        var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        var validText = regEx.test(nameInput.val());

        if (!validText) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> No se permiten caracteres especiales </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }


}


function validacionSesion2(nameCheck, mensaje) {
    if ($(nameCheck).prop("checked") == false) {
        $(nameCheck).siblings(".error-input").remove();
        $(nameCheck)
            .parents(".checkboxes")
            .append('<span class="error-input">' + mensaje + "</span>");
    } else {
        $(nameCheck).siblings(".error-input").remove();
    }

    $(".checkboxes input").on("click", function() {
        if ($(this).prop("checked") != false) {
            $(this).siblings(".error-input").remove();
        }
    });
}

const btnClick = () => {
    const btnContacto = document.querySelector('#btnEnvia'),
        inputNombre = $("#name"),
        inputCompany = $("#company"),
        inputCorreo = $("#email"),
        inputPhone = $("#phone"),
        textMsj = $("#mensaje"),
        checkNews = $("#checkLegale");


    btnContacto.onclick = function() {
        valText(inputNombre);
        valText(inputCompany);
        valMail(inputCorreo);
        valNum(inputPhone);
        valTextNum(textMsj);
        validacionSesion2(checkNews, "Debes Aceptar los Términos y Condiciones");

        // ok
        if ($(".contacto .error-input").length == 0) {
            document.querySelector(".contacto form").submit()
            return false;
        } else {
            return false;
        }

        // test conact form
        // if ($(".contacto .error-input").length == 0) {
        //     $(".contacto form").submit(function(e) {
        //         if (localStorage.submitted == undefined) {

        //             e.preventDefault(); // prevent the form from submitting

        //             var url_ob = new URL(document.URL);
        //             url_ob.hash = '#wpcf7-f40-o1';

        //             // new url
        //             var new_url = url_ob.href;

        //             // change the current url
        //             document.location.href = new_url;

        //             console.log('You ve already submitted this form');

        //         } else {
        //             localStorage.submitted = true; //set submitted value to true
        //             $(".contacto form").submit(); // dynamically submit the form
        //             console.log('no');
        //         }
        //     })
        // }
    }
}

const submitForm = () => {
    if (window.location.hash == "#wpcf7-f40-o1") {
        $(".modal").modal("show");
        setTimeout(function() {
            $(".modal").modal("hide");
        }, 3000);
        // $(".contacto form").addClass("form-send overlay");
        // $(".wpcf7-response-output").text("Gracias por tu mensaje. El mensaje ha sido enviado.");
        // $(".screen-reader-response p").text("Gracias por tu mensaje. El mensaje ha sido enviado.");
        // setTimeout(function() {
        //     $(".wpcf7-response-output").fadeOut(100);
        //     $(".contacto form").removeClass("overlay");
        // }, 2000);
        // setTimeout(function() {
        //     $(".contacto form").removeClass("form-send");
        // }, 2100);

    }
}

$(function() {
    parallaxContacto();
    inputAnim();
    btnClick();
    submitForm();
});