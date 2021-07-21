
    var men1, men2;
    men1 = "Luis Jurado Quesada";
    men2 = "Diseño y programación Web";

    var long1, long2;
    long1 = men1.length;
    long2 = men2.length;

function Ef1() {

    var texto1, long3;
    texto1 = document.getElementById('escribe1').textContent;
    
    if(texto1 == undefined) {
        
        long3 = 0;

    } else {
        
        long3 = texto1.length;

        if (long3 == long1) {
            texto1 = "";
            document.getElementById('escribe1').innerHTML = texto1;
        } else {
            texto1 += men1.charAt(texto1.length);
            document.getElementById('escribe1').innerHTML = texto1;
        }
    }


}

function Ef2() {
    
    var texto2, long4;
    texto2 = document.getElementById('escribe2').textContent;
    
    if(texto2 == undefined) {
        
        long4 = 0;

    } else {
        
        long4 = texto2.length;

        if (long4 == long2) {
            texto2 = "";
            document.getElementById('escribe2').innerHTML = texto2;
        } else {
            texto2 += men2.charAt(texto2.length);
            document.getElementById('escribe2').innerHTML = texto2;
        }
    }
}

window.addEventListener('load', function() {

    var veloA, veloB, tempo1, tempo2;
    veloA = 300;
    veloB = 228;

    window.clearInterval(tempo1);
    tempo1=window.setInterval("Ef1()",veloA);
    window.clearInterval(tempo2);
    tempo2=window.setInterval("Ef2()",veloB);

})

