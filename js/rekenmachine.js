var getal1 = document.getElementById("getal1");
var getal2 = document.getElementById("getal2");

var btnSom = document.getElementById("btnSom");
var btnVerschil = document.getElementById("btnVerschil");
var btnProduct = document.getElementById("btnProduct");
var btnQuotiënt = document.getElementById("btnQuotiënt");

var uitvoer =  document.getElementById("uitvoer");


btnSom.addEventListener("click",function(){
    let resultaat = parseInt(getal1.value) + 
        parseInt(getal2.value);
    let paragraph = createParagraph();
    
    paragraph.innerHTML = "De som van" + getal1.value + "en"  + getal2.value+ "is" + resultaat; 
    uitvoer.innerHTML = resultaat;
    uitvoer.appendChild(paragraph);
});


btnVerschil.addEventListener("click",function(){
    let resultaat = parseInt(getal1.value) - 
        parseInt(getal2.value);
    let paragraph = createParagraph();
    paragraph.innerHTML = "het verschil van" + getal1.value + "en"  + getal2.value+ "is" + resultaat;
     uitvoer.innerHTML = resultaat;
    uitvoer.appendChild(paragraph);
      
});


btnProduct.addEventListener("click",function(){
    let resultaat = parseInt(getal1.value) * 
        parseInt(getal2.value);
    let paragraph = createParagraph();
    paragraph.innerHTML = "De product van" + getal1.value + "en"  + getal2.value+ "is" + resultaat;
    uitvoer.innerHTML = resultaat;
    uitvoer.appendChild(paragraph);
     
});


btnQuotient.addEventListener("click",function(){
    let resultaat = parseInt(getal1.value) / 
        parseInt(getal2.value);
    let paragraph = createParagraph();
   paragraph.innerHTML = "De quotient van" + getal1.value + "en"  + getal2.value+ "is" + resultaat;
     uitvoer.innerHTML = resultaat;
     uitvoer.appendChild(paragraph);
});



function createParagraph(){
    let paragraph = document.createElement("p");
    
    return paragraph;
    
}