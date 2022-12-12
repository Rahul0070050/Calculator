document.getElementById("Screen").disabled = true;
function btn(val) {
    let number = document.getElementById("Screen").value += val;
    console.log(number);
}

function clearItem() {
    document.getElementById("Screen").value = "";
}


function equalTo() {
    try{
        let num = document.getElementById("Screen").value
        let result = eval(num);
        document.getElementById("Screen").value = result;
    }catch{
        
    }
}
    
function clearOneItem() {
    try{
        let num = document.getElementById("Screen").value
        let result = num.slice(0,-1);
        document.getElementById("Screen").value = result;
    }catch{
        
    }
}