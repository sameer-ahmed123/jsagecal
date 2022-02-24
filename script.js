var year_born = prompt("enter year you were born","")
// var year_born=document.getElementById("input_date_feild").value;
// var theyear= year_born.toString();
var d = new Date();
var n = d.getFullYear();



function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    document.getElementById("disp_age").innerHTML=age
    return age;
}
calculatedAge = getAge(year_born);