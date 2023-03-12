"use strict";
let userName = ""
function greeting(){
    userName = prompt("Hello! What is your name?");
    console.log(userName);
    alert("Welcome! " + userName + " to my site.");
}
greeting()

    alert("I have a quick guessing game for you!");

function guessingGame1(){
    let favThing = prompt("My favorite thing to do is snowboard. Yes or No?").toLowerCase();
    console.log(favThing);
    if (favThing === "yes"){
        alert("Indeed. My favorite thing to do is Snowboard.");
    } else {
        alert("Im sorry that was not the right answer. Please try again.");
    }
}
guessingGame1();

let questionTwo = 'My favorite food is Pizza. Yes or No?';
let questionThree = 'My past career job was a UPS Package Delivery Driver Yes or No?';
let questionFour = 'My favorite animals are Alaskan Malamutes. Yes or no?';
let questionFive = 'My overall goal is to become a Developer. Yes or No?';

let questionsFG = [questionTwo, questionThree, questionFour, questionFive];
let answersFG = ['yes', 'yes', 'yes', 'yes'];

function guessingGame2(questionsFG, answersFG) {
    let response = prompt(questionsFG).toLowerCase();
        if (response === answersFG) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < questionsFG.length; i++) {
    let userCorrect = guessingGame2(questionsFG[i], answersFG[i])
    if(userCorrect) {
        alert('Correct');
        console.log(userCorrect);
    } else {
        alert('Incorrect.');
        console.log(userCorrect);
    }
}

let thankYou = alert("Thats it! Thank you " + userName + " for taking the time to answer these questions.");

let questions = ["How old am I? Pick a number between 1 and 30", "I am thinking of 3 numbers between 1 and 10. Can you guess one of them?"];
let answers = [25, 2, 5, 9];
let userAttempts = 0;
let timesRan = 0;

function myGame6(){
while (userAttempts < 4){
    let userGuess = prompt(questions[0]);
    console.log(timesRan);
    timesRan++;
    userAttempts++;
    if (userGuess == answers[0]){
        alert("Correct!");
        break;
    } else if (userGuess < answers[0]){
        alert("Too low!");
    } else if (userGuess > answers[0]){
        alert("Too high!");
    }
    if (userAttempts === 0){
        alert("You have 4 more attempts!");
    } else if (userAttempts === 1){
        alert("You have 3 more attempts!");
    } else if (userAttempts === 2){
        alert("You have 2 more attempts!");
    } else if (userAttempts === 3){
        alert("You have 1 more attempt!");
    } else {
        alert("You have exhausted your attempts! I am 25 years old.");
    }
}
}
myGame6();


let uAttempts = 0

function myGame7(){
while (uAttempts < 6){
    let anotherGuess = prompt(questions[1]);
    console.log(timesRan);
    timesRan++;
    uAttempts++;
    if (anotherGuess == answers[1]){
        alert("You got one!");
        break;
    } else if (anotherGuess == answers[2]){
        alert("You got one!");
        break;
    } else if (anotherGuess == answers[3]){
        alert("Thats it!");
        break;
    } else if (anotherGuess != answers[1] || answers[2] || answers[3]){
        alert("Incorrect");
    }
    if (uAttempts === 1){
        alert("You have 5 more attempts!");
    } else if (uAttempts === 2){
        alert("You have 4 more attempts!");
    } else if (uAttempts === 3){
        alert("You have 3 more attempts!");
    } else if (uAttempts === 4){
        alert("You have 2 more attempts!");
    } else if (uAttempts === 5){
        alert("You have 1 more attempt!");
    } else {
        alert("You have exhausted all of your attempts! The numbers were 2,5, and 9!");
    }
}
}
myGame7();

alert("You have completed these questions using " + timesRan + " attempts!");
