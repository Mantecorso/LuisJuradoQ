//const bootstrap = require('bootstrap');
alert('Tu pantalla mide'+this.screen.width);

window.addEventListener('load', function() {
    
    // botón empezar página

    var empi;
    empi = document.getElementById('empi');

    empi.addEventListener('click', function() {

        var grupo;
        grupo = document.getElementById('grupo');
        grupo.style.left = "5%";
    })

    // botón ocultar de enlaces principal

    var cie;
    cie = document.getElementById('cie');

    cie.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('grupo');
        grupo.style.left = "100%";
    })

    // botones mostrar cada página informativa
    
    var unoa, unob, unoc, unoe, unof, unog;
    unoa = document.getElementById('uno1');
    unob = document.getElementById('uno2');
    unoc = document.getElementById('uno3');
    unoe = document.getElementById('uno4');
    unof = document.getElementById('uno5');
    unog = document.getElementById('uno6');

    unoa.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos1');
        grupo.style.top = "0";
    })

    unob.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos2');
        grupo.style.top = "0";
    })

    unoc.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos3');
        grupo.style.top = "0";
    })

    unoe.addEventListener('click', function() {
        var grupo, inst, link2, gith;
        grupo = document.getElementById('dos4');
        grupo.style.top = "0";
        inst = document.getElementById('inst');
        link2 = document.getElementById('link2');
        gith = document.getElementById('gith');
        inst.style.top = "25%";
        link2.style.top = "50%";
        gith.style.top = "75%";
    })

    unof.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos5');
        grupo.style.top = "0";
    })

    unog.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos6');
        grupo.style.top = "0";
    })

    // botón cerrar páginas informativas

    var sube1, sube2, sube3, sube4, sube5, sube6;
    sube1 = document.getElementById('sube1');
    sube2 = document.getElementById('sube2');
    sube3 = document.getElementById('sube3');
    sube4 = document.getElementById('sube4');
    sube5 = document.getElementById('sube5');
    sube6 = document.getElementById('sube6');

    sube1.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos1');
        grupo.style.top = "-100%";
    })

    sube2.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos2');
        grupo.style.top = "-100%";
    })

    sube3.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos3');
        grupo.style.top = "-100%";
    })

    sube4.addEventListener('click', function() {
        var grupo, inst, link2, gith;
        grupo = document.getElementById('dos4');
        grupo.style.top = "100%";
        inst = document.getElementById('inst');
        link2 = document.getElementById('link2');
        gith = document.getElementById('gith');
        inst.style.top = "-100%";
        link2.style.top = "-100%";
        gith.style.top = "-100%";
    })

    sube5.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos5');
        grupo.style.top = "100%";
    })

    sube6.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos6');
        grupo.style.top = "100%";
    })

    // movimientos redes sociales

    // movimientos recuadros redes sociales

    var inst, inst1, link1, link2, gith, gith1;

    inst = document.getElementById('inst');
    link2 = document.getElementById('link2');
    gith = document.getElementById('gith');
    inst1 = document.getElementById('inst1');
    link1 = document.getElementById('link1');
    gith1 = document.getElementById('gith1');

    inst.addEventListener('mouseover', function() {
        inst1.style.left = "15%";
    })

    inst.addEventListener('mouseout', function() {
        inst1.style.left = "100%";
    })

    link2.addEventListener('mouseover', function() {
        link1.style.left = "15%";
    })

    link2.addEventListener('mouseout', function() {
        link1.style.left = "100%";
    })

    gith.addEventListener('mouseover', function() {
        gith1.style.left = "15%";
    })

    gith.addEventListener('mouseout', function() {
        gith1.style.left = "100%";
    })

    
    // colocar logos redes sociales

    // var dos4;
    // dos4 = document.getElementById('dos4');

    // dos4.addEventListener('animationend', function () {

    //     inst = document.getElementById('inst');
    //     link2 = document.getElementById('link2');
    //     gith = document.getElementById('gith');

    //     if (scrollY >= 0) {

    //         gith.style.top = "25%";
    //         inst.style.top = "50%";
    //         link2.style.top = "75%";

    //     } else {

    //         gith.style.top = "-100%";
    //         inst.style.top = "-100%";
    //         link2.style.top = "-100%";

    //     }

    // })

    //



})