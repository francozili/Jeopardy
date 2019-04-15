$(".popUp").hide();
let questions = [
    "What does the online acronym SMH stand for?",
    "What was the first publicly traded U.S. company to reach a $1 trillion market cap?",
    "On the popular social website Reddit, what does AMA stand for?",
    "Mark Zuckerberg was one of the founders of which social networking site?",
    "What was the first console video game that allowed the game to be saved?",
    "Which metallic element has a melting point of approximately −38 °F (−39 °C)?",
    "How many electrons does a hydrogen atom have?",
    "What heavy metal element was once known as quicksilver?",
    "What chemical element gives the blood of a lobster a bluish tint?",
    "Which is the most abundant metal in the earth’s crust?",
    "What is the seventh and final novel of the Harry Potter series?",
    "In the Harry Potter series, what is the name of Harry’s pet owl?",
    "What are the four houses at Hogwarts School of Witchcraft and Wizardry",
    "Emma Watson is known for playing which character in Harry Potter?",
    "Who directed the movie “Harry Potter and the Prisoner of Azkaban”?",
    "Orcinus orca is the scientific name for which animal?",
    "Which bird has eyes that are larger than its brain?",
    "What is the only snake in the world that builds a nest for its eggs?",
    "What is the only mammal born with horns?",
    "A wombat is a marsupial native to which country?",
    "What part of the human body contains five metacarpal bones?",
    "The adult human skeleton is made of up how many bones?",
    "What is the most common blood type in humans?",
    "What chemical element gives the blood of a lobster a bluish tint?",
    "The molecule “hemoglobin” is used in which type of cells?",
    "The dingo is a type of feral dog native to which country?",
    "The Chihuahua is a breed of dog believed to originate from what country?",
    "The Alaskan Malamute is a type of what?",
    "A puggle is a cross between which two dog breeds?",
    "How many chambers are there in a dog’s heart?",
]

let answers = [
    "Shaking my head",
    "Apple",
    "Ask me anything",
    "Facebook",
    "The legend of zelda",
    "Mercury",
    "One",
    "Mecury",
    "Copper",
    "Aluminum",
    "Harry Potter and the Deathly Hallows",
    "Headwig",
    "Gryffindor, Ravenclaw, Hufflepuff, & Slytherin",
    "Hermione Granger",
    "Alfonso Cuarón",
    "Killer Whale",
    "Ostrich",
    "King Cobra",
    "Giraffe",
    "Australia",
    "The Hand",
    "206",
    "0+",
    "Copper",
    "Red blood cells",
    "Australia",
    "Mexico",
    "Dog",
    "Pug and Beagle",
    "Four"
]

let halt;
let secondsLeft;
let x;
// for loop to iterate through buttons and check if its the right button
for (i = 0; i < 30; i++) {
   btnId = "#b" + i;
   x = i;
   checkClick(btnId, i);
}
// Function for when you click on an ID or Class shows pop up menue and pass the array of question and starttimes
// Once clicked again stop timer and pass in the answer
// click on the answer and it hides popup
function checkClick(idOrClass, x) {
   $(idOrClass).click(function () {
      $(".popUp").show();
      $(".gameQue").text(questions[x]);
      startTimer();
      $(".popUp").click(function () {
         stopTimer();
         $(".popUp").show();
         $(".gameQue").text(answers[x]);
         $(".popUp").click(function () {
            $(".popUp").hide();
            $(idOrClass).prop("disabled", true);
         });
      });
   });
}
// Function to start timer and show gif 
function startTimer() {
   $("#bkMusic")[0].play();
   $("#gif").show();
   $(".countDown").show();
   secondsLeft = 10;
   displayTimer();
   halt = window.setInterval(updateTimeValue, 1000);
}
// Function to stop tiimer and hide timer and gif
function stopTimer() {
   window.clearInterval(halt);
   $(".countDown").hide();
   $("#gif").hide();
   $("#bkMusic")[0].pause();
}
// Function to display and concatenate the seconds coutdown to string second
function displayTimer() {
   $(".countDown").html(secondsLeft + " seconds");
}
// function to show the countdown of seconds with a loop to reduce and stop
function updateTimeValue() {
   if (secondsLeft > 0) {
      secondsLeft -= 1;
   } else {
      stopTimer();
   }
   displayTimer();
}

// let scoreBalance = 0
// let addBtn = document.getElementsByClassName('add')[0].addEventListener('click', function(){
//    let add = document.getElementsByClassName('input').value
//    scoreBalance += Number(add)
//    let newCheckingBalance = document.getElementsByClassName('balance')[0].innerText = "$" + checkingBalance
//    if (checkingBalance > 0) {
//        document.getElementById("checking").classList.remove("zero")
//    }
// })
// let scoreBalance = 0
// let addBtn = document.getElementById("add").addEventListener("click", addEvent);
// function addEvent() {
//   parseInt(document.getElementsByClassName("input")[0].innerText) +
//        parseInt(document.getElementById("add")[0].value)
//    console.log(newBal)
//    document.getElementById("balance")[0].innerText = scoreBalance
// }

// document.getElementById("withdraw").addEventListener("click", checkingWithdraw);
// function checkingWithdraw() {
//    let newBal = parseInt(document.getElementById("checkBalance").innerText) -
//        parseInt(document.getElementById("checkDeposit").value)
//    console.log(newBal)
//    document.getElementById("checkBalance").innerText = newBal
// }

// Function to add and subtract score

