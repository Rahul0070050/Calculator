document.getElementById("Screen").disabled = true;
function btn(val) {
    var number = document.getElementById("Screen").value += val;
    console.log(number);
}

function clearItem() {
    document.getElementById("Screen").value = "";
}


function equalTo() {
    try{
        var num = document.getElementById("Screen").value
        var result = eval(num);
        document.getElementById("Screen").value = result;
    }catch{
        
    }
}