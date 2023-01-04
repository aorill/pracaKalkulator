function zadanie1(){
    let zadanie1input1 = parseInt(document.getElementById("zadanie1input1").value);
    let zadanie1input2 = parseInt(document.getElementById("zadanie1input2").value);
    let zadanie1input3 = parseInt(document.getElementById("zadanie1input3").value);

    let zadanie1wynik1 = document.getElementById("zadanie1wynik1");
    
    zadanie1wynik1.innerHTML = "Wynik:" + (zadanie1input1 + zadanie1input2 + zadanie1input3);
}

function zadanie2(){
    let zadanie2input1 = parseFloat(document.getElementById("zadanie2input1").value);
    let zadanie2input2 = parseFloat(document.getElementById("zadanie2input2").value);
    let zadanie2input3 = parseFloat(document.getElementById("zadanie2input3").value);

    let zadanie2wynik1 = document.getElementById("zadanie2wynik1");
    
    zadanie2wynik1.innerHTML = "Wynik:" + ((zadanie2input1 + zadanie2input2 + zadanie2input3)/3);
}

function zadanie3(){
    let zadanie3input1 = parseFloat(document.getElementById("zadanie3input1").value);
    let zadanie3input2 = parseFloat(document.getElementById("zadanie3input2").value);

    let zadanie3wynik1 = document.getElementById("zadanie3wynik1");
    let zadanie3wynik2 = document.getElementById("zadanie3wynik2");
    let zadanie3wynik3 = document.getElementById("zadanie3wynik3");

    zadanie3wynik1.innerHTML = "Suma:" + ((zadanie3input1 + zadanie3input2));
    zadanie3wynik2.innerHTML = "Roznica:" + ((zadanie3input1 - zadanie3input2));
    zadanie3wynik3.innerHTML = "Iloczyn:" + ((zadanie3input1 * zadanie3input2));
}

function zadanie4(){
    let zadanie4input1 = parseFloat(document.getElementById("zadanie4input1").value);

    let zadanie4wynik1 = document.getElementById("zadanie4wynik1");
    
    zadanie4wynik1.innerHTML = "Wynik:" + (Math.sqrt(zadanie4input1));
}

function zadanie5(){
    let zadanie5input1 = parseFloat(document.getElementById("zadanie5input1").value);

    let zadanie5wynik1 = document.getElementById("zadanie5wynik1");
    
    zadanie5wynik1.innerHTML = "Wynik:" + (zadanie5input1*zadanie5input1);
}

function zadanie6(){
    let zadanie6input1 = parseFloat(document.getElementById("zadanie6input1").value);
    let zadanie6input2 = parseFloat(document.getElementById("zadanie6input2").value);
    let zadanie6input3 = parseFloat(document.getElementById("zadanie6input3").value);

    let zadanie6wynik1 = document.getElementById("zadanie6wynik1");
    
    zadanie6wynik1.innerHTML = "Wynik:" + (((zadanie6input1 * 2) * zadanie6input2) + ((zadanie6input2 * 2) * zadanie6input3) + ((zadanie6input1 * 2) * zadanie6input3));
}

function zadanie7(){
    let zadanie7input1 = parseFloat(document.getElementById("zadanie7input1").value);

    let zadanie7wynik1 = document.getElementById("zadanie7wynik1");
    let zadanie7wynik2 = document.getElementById("zadanie7wynik2");
    
    zadanie7wynik1.innerHTML = "Pole:" + (Math.PI * (zadanie7input1 * zadanie7input1));
    zadanie7wynik2.innerHTML = "Obwod:" + ((Math.PI *2) * zadanie7input1);
}

function zadanie8(){
    let zadanie8input1 = parseFloat(document.getElementById("zadanie8input1").value);

    let zadanie8wynik1 = document.getElementById("zadanie8wynik1");
    
    zadanie8wynik1.innerHTML = "Koszt Przejazdu:" + (28.8 * zadanie8input1);
}

function zadanie9(){
    let zadanie9input1 = parseFloat(document.getElementById("zadanie9input1").value);
    let zadanie9input2 = parseFloat(document.getElementById("zadanie9input2").value);
    let zadanie9input3 = parseFloat(document.getElementById("zadanie9input3").value);

    let zadanie9wynik1 = document.getElementById("zadanie9wynik1");

    let info1 = 100/zadanie9input3;
    let info2 = zadanie9input2/info1;
    let wynik = info2*zadanie9input1;
    zadanie9wynik1.innerHTML = "Koszt przejazdu:" + wynik;

}

function zadanie10() {
    let zadanie10input1 = parseFloat(document.getElementById("zadanie10input1").value);
    let zadanie10input2 = parseFloat(document.getElementById("zadanie10input2").value);

    let zadanie10wynik1 = document.getElementById("zadanie10wynik1");
    let zadanie10wynik2 = document.getElementById("zadanie10wynik2");

    let rok = (((zadanie10input1 * 1.08) - zadanie10input1) * 0.81);

    zadanie10wynik1.innerHTML = "Zarobek za rok:" + rok;
    zadanie10wynik2.innerHTML = "Zarobek za calosc:" + rok * zadanie10input2;
}