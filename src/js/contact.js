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

        if ($(".contacto .error-input").length == 0) {
            document.querySelector(".contacto form").submit();
            return false;
        } else {
            return false;
        }

    }
}


$(function() {
    parallaxContacto();
    inputAnim();
    btnClick();
});