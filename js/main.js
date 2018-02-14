    //1: wybierz losowe umiejscowienie myszy (loswa liczba x i y z przedzialu: 0 do wielkość obrazka-1, bo pierwszy pixel ma wspolrzedna 0)

    var randomNumber = function(imageSize) {
        return Math.floor(Math.random() * imageSize); //math floor zaokrągla w dół liczbe z przedzialu 0-1 wygeerowana przez math random
    };

    //2: ustal CEL - współdrzędne położenia myszy (szerokosc x wysokosc obrazka)
    var width = 640; 
    var height = 460;

    //findMouse(640,460);

    var goal = {
        x: randomNumber(width),
        y: randomNumber(height)
    }
    
    //3: oblicz odleglosc miedzy kliknieciem a celem ()

    var countDistance = function (event, goal) { //e to wbudowany obiekt zdarzenia z inf nt. offsetów X i Y
        var wayToX = event.offsetX - goal.x; //odleglosc w poziomie m-dzy miejscem klikniecia a celem
        var wayToY = event.offsetY - goal.y; //odleglosc w pionie m-dzy miejscem klikniecia a celem
        return Math.sqrt((wayToX * wayToX) + (wayToY * wayToY)); //twierdzenie Pitagorasa (w trojkacie prostokatnym trzecia przyprostokatna to a2 + b2 = c2 wiec licze perwiastek (Math.sqrt) z a2 + b2
    };

    //podpowiedzi dla gracza

    var makeCatchword = function (distance) {
        if (distance < 53) {
        return "Parzy!";
        } else if (distance < 60) {
        return "Gorąco";
        } else if (distance < 80) {
        return "Ciepło";
        } else if (distance< 100) {
        return "Letnio";
        } else if (distance < 120) {
        return "Zimno";
        } else if (distance < 320) {
        return "Mróz";
        } else {
        return "Syberia!";
        }
    };

    //4: teraz lacze to wszystko z obsluga klikniecia -> gdy gracz kliknie w obrębie pola:

    //obrazek:
    var room = document.querySelector("#room");

    //paragraf na podpowiedz z odlegloscia:
    var dist = document.querySelector("dist");

    //paragraf z iloscia klikniec:
    var kliki = document.querySelector("#kliki");

    //poczatek klikniec:
    var clicks = 0;

    //text w alercie
    var alert = document.querySelector("#alertTxt");
    
    //okno - czy ma sie wyswietlac czy nie
    var okno = document.querySelector(".alert");

    room.addEventListener("click", function() {
        //licznik kliknięć:
        clicks++;

        //od razu dodaje txt z licznikiem na strone:
        kliki.innerText = clicks;

        // Obliczam odległość między kliknięciem (zdarzeniem) a celem (myszą)
        var distance = countDistance(event, goal);

        //na podstawie odleglosci okreslam podpowiedz
        var catchword = makeCatchword(distance);

        //umieszczam podpowiedz na stronie:

        var dist = document.querySelector("#dist");

        dist.innerText = catchword;

        //sprawdzenie czy U trafil (trafi jak kliknie w obrebie 50 pixeli od celu)
        var alert = document.querySelector("#alertTxt");
        var okno = document.querySelector(".alert");

        if (distance < 50) {        
            alert.innerText = "Mysz została znaleziona po " + clicks + "klinięciach!";
        
            okno.classList.add("visible");
            okno.classList.remove("hidden");
        
        } 

        //jak w ciagu 10 szans nie trafi, to przegrywa:

        if (clicks > 9) {
            alert.innerText = "Gra skończona. Niestety przegrana.";
        
            okno.classList.add("visible");
            okno.classList.remove("hidden");
        }
        
    });

//reset
var again = document.querySelectorAll(".again");

for(var i=0; i<again.length; i++){
    again[i].addEventListener("click", function() {
        location.reload();
    });
}
