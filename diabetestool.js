// deckar variables
var age = -1;
var bmi = -1;
var family = -1;
var diet = -1;

// get values from radio buttons
function getAge(newAge){
    age = parseInt(newAge);// convert to an Int
    return age;
}

function getBmi(newBmi){
    bmi= parseInt(newBmi);// convert to an Int
    return bmi;
}

function getFamily(newFamily){
    family= parseInt(newFamily);// convert to an Int
    return bmi;
}

function getDiet(newDiet){
    diet= parseInt(newDiet);// convert to an Int
    return bmi;
}



function calculate(){

    var result = age + bmi + family + diet;
    // check the diabete
    if(result <=15){
        var lowRisk = document.getElementById("lowrisk").style.display = "block";
    }
    else if(result > 15 && result <=25){
        var mediumRisk = document.getElementById("mediumrisk").style.display = "block";
    }
    else{
        var highRisk = document.getElementById("highrisk").style.display = "block";
    }
}
window.onload=calculate();



