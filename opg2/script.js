



var formEl = document.getElementById("form");
var resultEl = document.getElementById("result");


formEl.addEventListener('submit',function(e){
    e.preventDefault();
    elements = formEl.elements;    
    resultEl.innerHTML = "Hei " + elements.navn.value
});
