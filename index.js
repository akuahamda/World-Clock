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




   