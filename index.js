setInterval(function () { 

let divElement = document.querySelector("#USA");
let losAngelosDate = divElement.querySelector(".date");
let losAngelosTimeElement = divElement.querySelector(".time");
let losAngelosTime = moment().tz("America/Los_Angeles")
losAngelosDate.innerHTML = moment().format("MMMM Do YYYY");

losAngelosTimeElement.innerHTML = losAngelosTime.format("h:mm:ss  [<small>]A[</small>] ");
  
}, 1000);


setInterval(function () { 
let parisElement = document.querySelector("#france");
let parisDate = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris")
parisDate.innerHTML = moment().format("MMMM Do YYYY");

parisTimeElement.innerHTML = parisTime.format("h:mm:ss  [<small>]A[</small>] ");
 
},1000);

function updatecity(event) {
    let citytimeZone = event.target.value;
    if(citytimeZone === "current") { 
        citytimeZone = moment.tz.guess();
    }
    let cityName = citytimeZone.replace("_"," ").split("/")[1];
    cityTime = moment().tz(citytimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city"> 
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>`
 };

let selectElement = document.querySelector("#city-dropdown");
selectElement.addEventListener("change", updatecity);




   