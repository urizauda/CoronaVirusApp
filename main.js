//clock

var paragraph = document.getElementById("pp");
function screenClock() {
    var hour = new Date().getHours(), min = new Date().getMinutes(), second = new Date().getSeconds();
    window.setInterval(() => {

        if (second == 60) {
            min++;
            second = 0;
        }
        if (min == 60) {
            hour++;
            min = 0;
        }

        if (second < 10) {
            second = "0" + Number(second);
        }
        if (min < 10) {
            min = "0" + Number(min);
        }

        paragraph.innerHTML = `<p style = "text-align: center; color: black; witdh: 50vw; height: 10vh; font-size: 20px">${hour}:${min}:${second}</p>`;
        second++;
    }, 1000);
};

screenClock()




//1

var firstNameInput = document.getElementById("firstNameInpt");
var lastNameInput = document.getElementById("lastNameInpt");
var yearInput = document.getElementById("yearInpt");
var IDInput = document.getElementById("idInput");
var cityInput = document.getElementById("cityInpt");
var button = document.getElementById("btn1");
var myDiv = document.getElementById("div1");
var myTable = document.getElementById("myTable");

var arr = [];
var check_year = new Date().getFullYear();
var check_month = new Date().getMonth() + 1;
var check_day = new Date().getDate();
var check_date = check_year + "/" + check_month + "/" + check_day;

button.onclick = () => {

    var patient = {
        first_Name: firstNameInput.value,
        last_Name: lastNameInput.value,
        year: yearInput.value,
        id: IDInput.value,
        city: cityInput.value,
        check_Date: check_date,
        hour: new Date().getHours()

    };

    for (let i = 0; i < arr.length; i++) {
        if (IDInput.value == arr[i].id) {
            alert("You're Already In The System");
            return;
        }
    }
    arr.push(patient);
    console.log(patient);


    myDiv.innerHTML += `First Name: ${patient.first_Name}<br>Last Name: ${patient.last_Name}<br>Born In: ${patient.year}<br>Id Number: ${patient.id}<br>Live In: ${patient.city}<br>Date Of Examination: ${patient.check_Date}<br>Hour: ${patient.hour}<br><br>`;




    //table

    myTable.innerHTML = `<table style= "border: 2px solid black"><tr><td style= "border: 1px solid black">First Name: ${patient.first_Name}</td><td style= "border: 1px solid black">Last Name: ${patient.last_Name}</td><td style= "border: 1px solid black">Born In: ${patient.year}</td><td style= "border: 1px solid black">Id Number: ${patient.id}</td><td style= "border: 1px solid black">Live In: ${patient.city}</td><td style= "border: 1px solid black">Date Of Examination: ${patient.check_Date}</td><td style= "border: 1px solid black">Hour: ${patient.hour}</td><tr></table><br><br>`

};

var checkName = document.getElementById("checkInpt");



//toUpperCase

function inputUpperCaseAll(userinput) {
    userinput.value = userinput.value.toUpperCase();
}

firstNameInput.oninput = () => { inputUpperCaseAll(firstNameInput) };
lastNameInput.oninput = () => { inputUpperCaseAll(lastNameInput) };
cityInput.oninput = () => { inputUpperCaseAll(cityInput) };
checkName.oninput = () => { inputUpperCaseAll(checkName) };



//search patient

var printPatient = document.getElementById("printPatient");
var para = document.getElementById("notExist");
var searchName = document.getElementById("searchButton");
var searchId = document.getElementById("searchIdButton");
var checkIdInpt = document.getElementById("checkIdInpt")



//check if patient name already exist

searchName.onclick = () => {
    for (let i = 0; i < arr.length; i++) {
        if (checkName.value == arr[i].first_Name) {
            printPatient.innerHTML = `First Name: ${arr[i].first_Name}  |Last Name: ${arr[i].last_Name}  |Born In: ${arr[i].year}  |Id Number: ${arr[i].id}  |Live In: ${arr[i].city}  |Date Of Examination: ${arr[i].check_Date}  |Hour: ${arr[i].hour}<br>`;
            return;
        }
        else {
            printPatient.innerHTML = `Patient Not on the List`
        }
    }
};



//check if patient id already exist

searchId.onclick = () => {
    for (let i = 0; i < arr.length; i++) {
        if (checkIdInpt.value == arr[i].id) {
            printPatient.innerHTML = `First Name: ${arr[i].first_Name}  |Last Name: ${arr[i].last_Name}  |Born In: ${arr[i].year}  |Id Number: ${arr[i].id}  |Live In: ${arr[i].city}  |Date Of Examination: ${arr[i].check_Date}  |Hour: ${arr[i].hour}<br>`;
            return;
        }
        else {
            printPatient.innerHTML = `Patient Not on the List`
        }
    }
};