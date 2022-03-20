



var formEl = document.getElementById("form");
var resultEl = document.getElementById("result");


formEl.addEventListener('submit',function(e){
    e.preventDefault();
    elements = formEl.elements;    
    resultEl.innerHTML = "Hei jeg heter " + elements.navn.value + " og er " + elements.alder.value + " år gammel"
    resultEl.innerHTML += "\n\nJeg liker å drikke " + elements.drikke.value + ".";
});


