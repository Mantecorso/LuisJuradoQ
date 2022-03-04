//const bootstrap = require('bootstrap');
alert('Tu pantalla mide'+this.screen.width);
alert('Tu pantalla mide'+this.screen.height);

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
        var fotoizq, fotoder, fotoaba;
        fotoizq = document.getElementById('foto1');
        fotoder = document.getElementById('foto2');
        fotoaba = document.getElementById('foto3');
        fotoizq.style.left = "";
        fotoder.style.left = "";
        fotoaba.style.left = "";
        var masbot;
        masbot = document.getElementById('botmas');
        masbot.style.top = "-25px";
    })

    unob.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos2');
        grupo.style.top = "0";
        var uno, dos;
        uno = document.getElementById('movil1');
        dos = document.getElementById('movil2');
        uno.style.top = "10%";
        dos.style.top = "50%";
        var tres, cuatro;
        tres = document.getElementById('wordpresa');
        cuatro = document.getElementById('htmlA');
        tres.style.left = "20%";
        cuatro.style.left = "60%";
    })

    unoc.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos3');
        grupo.style.top = "0";
        var mueve;
        mueve = document.getElementById('nofunc');
        mueve.style.left = "20%";
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
        var amigos1, amigos2, amigos3;
        amigos1 = document.getElementById('amigos1');
        amigos2 = document.getElementById('amigos2');
        amigos3 = document.getElementById('amigos3');
        amigos1.style.left = "30px";
        amigos2.style.left = "30px";
        amigos3.style.left = "30px";
        amigos1.style.top = "25%";
        amigos2.style.top = "50%";
        amigos3.style.top = "75%";
        var ac1, ac2, ac3;
        ac1 = document.getElementById('ac1');
        ac2 = document.getElementById('ac2');
        ac3 = document.getElementById('ac3');
        ac1.style.top = "40%";
        ac2.style.top = "79px";
        ac3.style.top = "50px";



    })

    unog.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos6');
        grupo.style.top = "0";
        var auno, buno, cuno, duno;
        auno = document.getElementById('cuatro1');
        buno = document.getElementById('cuatro2');
        cuno = document.getElementById('cuatro3');
        duno = document.getElementById('cuatro4');
        auno.style.left = "27%";
        buno.style.left = "27%";
        cuno.style.left = "27%";
        duno.style.left = "27%";

    })

    // boton mas información personal

    var botmas;
    botmas = document.getElementById('botmas');
    botmas.addEventListener('click', function() {
        var panmas;
        panmas = document.getElementById('panmas');
        panmas.style.left = "200px";
    })

    // boton cerrar mas información personal

    var cerrarpanelmas;
    cerrarpanelmas = document.getElementById('cerrarpanelmas');
    cerrarpanelmas.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('panmas');
        grupo.style.left = "250%";
    })



    // botones abrir trabajos wp y html en movil

    var abrirwp, abrirhtml;
    abrirwp = document.getElementById('abrirwp');
    abrirhtml = document.getElementById('abrirhtml');
    abrirwp.addEventListener('click', function() {
        var mostrar;
        mostrar = document.getElementById('wmuno');
        mostrar.style.left = "0";
        
    })
    abrirhtml.addEventListener('click', function() {
        
        var mostrar;
        mostrar = document.getElementById('hmuno');
        mostrar.style.left = "0";
    })
    
    

    // botónes cerrar trabajos wp y html en movil

    var cerrarwp, cerrarhtml;
    cerrarwp = document.getElementById('cerrarwm');
    cerrarhtml = document.getElementById('cerrarhm');
    cerrarwp.addEventListener('click', function() {
        var quitar;
        quitar = document.getElementById('wmuno');
        quitar.style.left = "-100%";
    })

    cerrarhtml.addEventListener('click', function() {
        var quitar;
        quitar = document.getElementById('hmuno');
        quitar.style.left = "-100%";
    })

       // botones abrir trabajos wp y html en pc

       var abrirwp, abrirhtml;
       abrirwp = document.getElementById('abrirwppc');
       abrirhtml = document.getElementById('abrirhtmlpc');

       abrirwp.addEventListener('click', function() {
           var mostrar;
           mostrar = document.getElementById('wpuno');
           mostrar.style.left = "0";    
       })

       abrirhtml.addEventListener('click', function() {   
           var mostrar;
           mostrar = document.getElementById('hpuno');
           mostrar.style.left = "0";
       })      
   
       // botónes cerrar trabajos wp y html en pc
   
       var cerrarwp, cerrarhtml;
       cerrarwp = document.getElementById('cerrarwp');
       cerrarhtml = document.getElementById('cerrarhp');
       cerrarwp.addEventListener('click', function() {
           var quitar;
           quitar = document.getElementById('wpuno');
           quitar.style.left = "-100%";
       })
   
       cerrarhtml.addEventListener('click', function() {
           var quitar;
           quitar = document.getElementById('hpuno');
           quitar.style.left = "-100%";
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
        grupo.style.top = "-130%";
        var masbot;
        masbot = document.getElementById('botmas');
        masbot.style.top = "-100%";
    })

    sube2.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos2');
        grupo.style.top = "-130%";
        var uno, dos;
        uno = document.getElementById('movil1');
        dos = document.getElementById('movil2');
        uno.style.top = "-100%";
        dos.style.top = "100%";
        var tres, cuatro;
        tres = document.getElementById('wordpresa');
        cuatro = document.getElementById('htmlA');
        tres.style.left = "-100%";
        cuatro.style.left = "100%";
    })

    sube3.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos3');
        grupo.style.top = "-130%";
        var mueve;
        mueve = document.getElementById('nofunc');
        mueve.style.left = "-100%";
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
        var amigos1, amigos2, amigos3;
        amigos1 = document.getElementById('amigos1');
        amigos2 = document.getElementById('amigos2');
        amigos3 = document.getElementById('amigos3');
        amigos1.style.left = "-100%";
        amigos2.style.left = "-100%";
        amigos3.style.left = "-100%";
        var ac1, ac2, ac3;
        ac1 = document.getElementById('ac1');
        ac2 = document.getElementById('ac2');
        ac3 = document.getElementById('ac3');
        ac1.style.top = "-100%";
        ac2.style.left = "100%";
        ac3.style.top = "100%";
    })

    sube6.addEventListener('click', function() {
        var grupo;
        grupo = document.getElementById('dos6');
        grupo.style.top = "100%";
        var auno, buno, cuno, duno;
        auno = document.getElementById('cuatro1');
        buno = document.getElementById('cuatro2');
        cuno = document.getElementById('cuatro3');
        duno = document.getElementById('cuatro4');
        auno.style.left = "-100%";
        buno.style.left = "100%";
        cuno.style.left = "-100%";
        duno.style.left = "100%";
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

    // botones webs amigas

    var amigo1, amigo2, amigo3;
    amigo1 = document.getElementById('amigos1');
    amigo2 = document.getElementById('amigos2');
    amigo3 = document.getElementById('amigos3');

    amigo1.addEventListener('click', function() {
        console.log("hola");
        var grupo, grupo0, grupo1;
        var grupo2, grupo3, grupo4;
        grupo = document.getElementById('cort1');
        grupo0 = document.getElementById('cort2');
        grupo1 = document.getElementById('cort3');
        grupo2 = document.getElementById('ac1');
        grupo3 = document.getElementById('ac2');
        grupo4 = document.getElementById('ac3');
        grupo.style.left = "100%";
        grupo1.style.left = "0";
        grupo0.style.left = "0";
        grupo2.style.zIndex = "5";
        grupo3.style.zIndex = "3";
        grupo4.style.zIndex = "4";
        grupo2.style.opacity = "1";
        grupo3.style.opacity = "0.1";
        grupo4.style.opacity = "0.1";
        grupo2.style.backgroundImage = "url('./images/grel1.png')";
    })

    amigo2.addEventListener('click', function() {
        
        var grupo, grupo0, grupo1;
        var grupo2, grupo3, grupo4;
        grupo0 = document.getElementById('cort1');
        grupo = document.getElementById('cort2');
        grupo1 = document.getElementById('cort3');
        grupo2 = document.getElementById('ac1');
        grupo3 = document.getElementById('ac2');
        grupo4 = document.getElementById('ac3');
        grupo1.style.left = "0";
        grupo0.style.left = "0";
        grupo.style.left = "100%";
        grupo2.style.zIndex = "2";
        grupo3.style.zIndex = "5";
        grupo4.style.zIndex = "4";
        grupo2.style.opacity = "0.1";
        grupo3.style.opacity = "1";
        grupo4.style.opacity = "0.1";
        grupo3.style.backgroundImage = "url('./images/horizontesinfinitos.png')";
    })

    amigo3.addEventListener('click', function() {
        
        var grupo, grupo0, grupo1;
        var grupo2, grupo3, grupo4;
        
        grupo0 = document.getElementById('cort1');
        grupo1 = document.getElementById('cort2');
        grupo = document.getElementById('cort3');
        grupo2 = document.getElementById('ac1');
        grupo3 = document.getElementById('ac2');
        grupo4 = document.getElementById('ac3');
        grupo.style.left = "100%";
        grupo1.style.left = "0";
        grupo0.style.left = "0";
        grupo2.style.zIndex = "2";
        grupo3.style.zIndex = "3";
        grupo4.style.zIndex = "5";
        grupo2.style.opacity = "0.1";
        grupo3.style.opacity = "0.1";
        grupo4.style.opacity = "1";
        grupo4.style.backgroundImage = "url('./images/titiritubers1.png')";
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