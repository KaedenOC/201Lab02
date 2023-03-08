"use strict";

// let userName = prompt("Hello! What is your name?");
// // console.log(userName);
// alert("Welcome! " + userName + " to my site.");

// alert("I have a quick guessing game for you!");

// let favThing = prompt("My favorite thing to do is snowboard. Yes or No?").toLowerCase();
// // console.log(favThing);

// if (favThing === "yes"){
//     alert("Indeed. My favorite thing to do is Snowboard.");

// } else {
//     alert("Im sorry that was not the right answer. Please try again.");
// }

// let favFood = prompt("My favorite food is Pizza. Yes or No?").toLowerCase();
// // console.log(favFood);

// if (favFood === "yes"){
//     alert("Correct! Pizza is my favorite food.");

// } else {
//     alert("I'm sorry that was not the right answer. Please try again.");
// }

// let myCareer = prompt("My past career job was a UPS Package Delivery Driver Yes or No?").toLowerCase();
// // console.log(myCareer);

// if (myCareer === "yes"){
//     alert("Yes! That's right.");
// } else {
//     alert("I'm sorry that was not the right answer. Please try again.");
// }

// alert("We are almost done!");

// let favAnimal = prompt("My favorite animals are Alaskan Malamutes. Yes or no?").toLowerCase();
// // console.log(favAnimal);

// if (favAnimal === "yes"){
//     alert("Perfect!");
// } else {
//     alert("I'm sorry that was not the right answer. Please try again.");
// }

// let myGoal = prompt("My overall goal is to become a Developer. Yes or No?").toLowerCase();
// // console.log(myGoal);

// if (myGoal === "yes"){
//     alert("Thats it! Thank you " + userName + " for taking the time to answer these questions.")
// } else {
//     alert("I'm sorry that was not the right answer. Please try again.");
// }

let questions = ["How old am I? Pick a number between 1 and 30"];
let answers = [25];
let userAttempts = 0;

while (userAttempts < 4){
    let userGuess = prompt(questions[0]);
    userAttempts++
    if (userGuess == answers[0]){
        alert("Correct!")
    } else if (userGuess < answers[0]){
        alert("Too low!");
    } else if (userGuess > answers[0]){
        alert("Too high!")
    }
    if (userAttempts === 0){
        alert("You have 4 more attempts!")
    } else if (userAttempts === 1){
        alert("You have 3 more attempts!")
    } else if (userAttempts === 2){
        alert("You have 2 more attempts!")
    } else if (userAttempts === 3){
        alert("You have 1 more attempt!")
    }
}

