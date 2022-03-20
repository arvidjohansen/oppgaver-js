



var formEl = document.getElementById("form");


formEl.addEventListener('submit',function(e){
    e.preventDefault();
    elements = formEl.elements;    
    console.log("Hei " + elements.navn.value)
});
