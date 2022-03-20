



var formEl = document.getElementById("form");


formEl.addEventListener('submit',function(e){
    e.preventDefault();
    elements = formEl.elements;
    
    console.log(elements);
    console.log("Hei " + elements.navn.value)
    console.log("Range: " + elements.range.value)
    printValues(formEl);
});

function printValues(form){
    elements = form.elements;

    for (var i=0;i <= elements.length;i++){
        try{
            console.log(elements[i].value);
        }catch{

        } 
    }
}