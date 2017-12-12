
document.addEventListener("DOMContentLoaded", function() {


    var sentences = ["Po jednym spotkaniu, łatwo się zaprzyjaźnić, ale razem mieszkając, łatwo się pokłócić.", "Piękne słowa nie są wiarygodne, wiarygodne – nie są piękne.", "Bez odwagi nie zostaniesz dowódcą.", "Biorąc strój nowy, zapomnij o starym.", "Dobre lekarstwo jest gorzkie w ustach, ale skuteczne w chorobie.", "Dopiero ze szczytu góry można ocenić rozległość równiny.", "Gdy zbyt pełno w czarce – łatwo o przelanie.", "Góra Tai nie odrzuca najmniejszego pyłku i dlatego jest taka wysoka.", "Istnieje tylko dwóch dobrych ludzi – jeden zmarł, a drugi się jeszcze nie narodził.", "Jeśli się nikogo o nic nie prosi, wszyscy wydają się uczynni.", "Jeśli zdobędziesz się na cierpliwość w jednej chwili gniewu, zaoszczędzisz sobie sto dni przykrości." , "Jeżeli strzelec spudłuje, niechaj tylko w sobie samym szuka przyczyny swego niepowodzenia.", "Kto ma pieniądze, może zmusić diabła, by napędzał jego młyn.", "Kto ma w domu miliony, nie ma chwili spokoju.", "Kto nie myśli o jutrze, będzie miał kłopoty, zanim dziś się skończy.", "Kto otwiera swe serce dla ambicji – zamyka je przed spokojem.", "Kto pyta, jest głupcem przez pięć minut; kto nie pyta, pozostaje nim do końca.", "Kto szuka przyjaciela bez wad, pozostanie bez przyjaciela.", "Lód o grubości trzech stóp nie bierze się z jednego chłodnego dnia.", "Ludzie, chociaż nie dożyją nawet stu lat, to jednak stwarzają sobie troski na całe tysiąclecia.", "Mądra pszczoła nie pije ze zwiędłego kwiecia.", "Mówiąc tysiąc słów, trudno sobie nie zaszkodzić.", "Najwięcej czasu ma człowiek, który niczego na później nie odkłada.", "Najwięcej kłamie ten, kto najwięcej mówi o sobie.", "Nie kłóć się z głupim, bo postronni nie zauważą różnicy.", "Nie sprzedaje się drzewa w lesie ani ryby w jeziorze.", "Przeszłość, jeśli jej nie zapomnisz, stanie się drogowskazem w przyszłości.", "Przemycana sól jest smaczniejsza od sprzedawanej legalnie.", "Ten, kto przeniósł górę, zaczął od małych kamyków.", "Wiedza i doświadczenie przychodzą z wiekiem. Najczęściej jest to wieko od trumny.","Zamiast innych się radzić, radź się samego siebie.","Zanim zaczniesz poprawiać świat, przejdź się trzy razy przez swój własny dom.", "Żyj tak, jakbyś miał umrzeć jutro, a pracuj tak jakbyś miał przed sobą wieczność."];




    var button = document.querySelector('button');



    button.addEventListener("click", function(){

        var randomIndex = Math.floor(Math.random()*sentences.length);

        var prediction = sentences[randomIndex];

        var saying = document.querySelector("#saying");

        saying.innerText = prediction;



    })

}); 


