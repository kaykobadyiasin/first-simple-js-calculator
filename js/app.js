let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let res = document.getElementById("result");

document.getElementById("sub").addEventListener("click", function(){
    res.value = parseInt(n1.value) + parseInt(n2.value);
});

document.getElementById("minus").addEventListener("click", function(){
    res.value = parseInt(n1.value) - parseInt(n2.value);
});

document.getElementById("multi").addEventListener("click", function(){
    res.value = parseInt(n1.value) * parseInt(n2.value);
});

document.getElementById("division").addEventListener("click", function(){
    res.value = parseInt(n1.value) / parseInt(n2.value);
});

document.getElementById("reset").addEventListener("click", function(){
    res.value = "00";
});
document.getElementById("reset").addEventListener("click", function(){
    n1.value = "empty";
});
document.getElementById("reset").addEventListener("click", function(){
    n2.value = "empty";
});