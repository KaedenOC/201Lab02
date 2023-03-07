"use strict";

let userName = prompt("Hello! What is your name?");
console.log(userName);
alert("Welcome! " + userName + " to my site.");

alert("I have a quick guessing game for you!");

let favThing = prompt("My favorite thing to do is snowboard. Yes or No?").toLowerCase();
console.log(favThing);

if (favThing === "yes"){
    alert("Indeed. My favorite thing to do is Snowboard.");
    console.log(favThing);

} else {
    alert("Im sorry that was not the right answer. Please try again.");
}

alert("Next Question");

let favFood = prompt("My favorite food is Pizza. Yes or No?").toLowerCase();

if (favFood === "yes"){
    alert("Correct! Pizza is my favorite food.");
    console.log(favFood);

} else {
    alert("I'm sorry that was not the right answer. Please try again.");
}