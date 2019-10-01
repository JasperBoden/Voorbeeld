// Element opvragen uit de html-pagina/
var testDiv = document.getElementById("testDiv");

//Aanpassen van wat er in een element staat
testDiv.innerHTML = "Dit is een stuk teskt";

var knop = document.getElementById("knop");
var tekst1 = "school is leuk";
var tekst2 = "school is niet leuk";
var state = 0;

//Event Lister toevoegen aan een element 
knop.addEventListener("click",function() {
    if(state === 0 ){
        testDiv.innerHTML = tekst2;
        state = 1;
    }
    else {
        testDiv.innerHTML = tekst1;
        state = 0;
    }
});

