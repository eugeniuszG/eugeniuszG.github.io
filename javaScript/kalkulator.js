var wynik = "";

function insert(num){
    if(wynik.length < 16){
        wynik = wynik + num;
        document.form.result.value = wynik;
    }
    if(wynik == "0"){
        wynik += ".";
        document.form.result.value = wynik;
    }
    if(wynik == "-0"){
        wynik += ".";
        document.form.result.value = wynik;
    }

}

function Operations(MathOperators){
    if(wynik.charAt(wynik.length - 1) == "+" || wynik.charAt(wynik.length - 1) == "-" || wynik.charAt(wynik.length - 1) == "*" || wynik.charAt(wynik.length - 1) == "/" ){
        return;
    }
    else if(wynik == ""){
        return;
    }
    else {
        wynik = wynik + MathOperators;
        document.form.result.value = wynik;
    }
}

function dot(d){
    var countLIczby = 1;
    var countDot = 0;
    if(wynik == ""){
        return;
    }
    if(wynik.charAt(wynik.length -1) == "." || 
            wynik.charAt(wynik.length - 1) == "+" || 
            wynik.charAt(wynik.length - 1) == "-" || 
            wynik.charAt(wynik.length - 1) == "*" || 
            wynik.charAt(wynik.length - 1) == "/" ){
        return;
    }

    for(i = 1; i < wynik.length; i++){
        if(wynik.charAt(i) == "+" || 
        wynik.charAt(i) == "-" || 
        wynik.charAt(i) == "*" || 
        wynik.charAt(i) == "/" ){
            countLIczby++;
        }
    }
    if(countLIczby - countDot == 1){
        wynik += ".";
        document.form.result.value = wynik;
        countDot++;
        return;
    }

}

function deletevse(){
    wynik = "";
    document.form.result.value = wynik;
}
function back(){
    wynik = wynik.substring(0, wynik.length - 1);
    document.form.result.value = wynik;
}

function koren(){
    if(wynik == ""){
        document.form.result.value = "";
        return;
    }
    wynik = Math.sqrt(wynik);
    wynik = wynik.toString();
    document.form.result.value = wynik;
}

function plusminus()
{
    if(wynik.charAt(0) == "-"){
        wynik = wynik.replace("-", "");
        document.form.result.value = wynik;
    }
    else{
        wynik = "-" + wynik;
        document.form.result.value = wynik;
    }
}

function equal(){
    if(wynik.charAt(wynik.length - 1) == "+" || wynik.charAt(wynik.length - 1) == "-" || wynik.charAt(wynik.length - 1) == "*" || wynik.charAt(wynik.length - 1) == "/" ){
        wynik = wynik.substring(0,wynik.length -1);
        wynik = eval(wynik);
        document.form.result.value = wynik;
    }
    if(wynik){
        document.form.result.value = eval(wynik);
        wynik = document.form.result.value;
    }
    if(wynik == "0."){
        document.form.result.value = eval(wynik);
    }
}
$(function () {
       
    }
)