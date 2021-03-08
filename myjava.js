//MVP
//divs for time slots of the day 9-5
//diplay current time of the day with momentjs.  
//save user data to divs and local storage associated to time slots
//if time permitting, change colors of divs to indicate if in current time frame
//make an update function to update the local storage with user input


let nineam = document.querySelector(".nine")
let tenam = document.querySelector(".ten")
let elevenam = document.querySelector(".eleven")
let twelvepm = document.querySelector(".twelve")
let onepm = document.querySelector(".one")
let twopm = document.querySelector(".two")
let threepm = document.querySelector(".three")
let fourpm = document.querySelector(".four")
let fivepm = document.querySelector(".five");


let ct = document.querySelector(".currenttime");


let save9 = document.querySelector(".svebutton9");
let save10 = document.querySelector(".svebutton10");
let save11 = document.querySelector(".svebutton11");
let save12 = document.querySelector(".svebutton12");
let save1 = document.querySelector(".svebutton1");
let save2 = document.querySelector(".svebutton2");
let save3 = document.querySelector(".svebutton3");
let save4 = document.querySelector(".svebutton4");
let save5 = document.querySelector(".svebutton5");

let buttons = [save9, save10, save11, save12, save1, save2, save3, save4, save5]

let inputs = [nineam, tenam, elevenam, twelvepm, onepm, twopm, threepm, fourpm]


//diplay current time of the day--question
function time(){
var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
var localTime  = moment.utc(date).toDate();
localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
return localTime
}

ct.value=time

//function save(){localStorage.setItem("9",nineam.value)}

function save() { localStorage.setItem("", inputs[i].value) }


for (i = 9; i <= 9; i++) {
    buttons.addEventListener("click", save)
}


//save user data to divs associated to time slots--question

