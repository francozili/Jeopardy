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





// //------------------------------------------------------------------------------- Computer
// [
//     {
//         'name': 'Computer',
//         'questions': [{
//             'value': 100,
//             'question': "What does the online acronym SMH stand for?",
//             "answers": [{
//                 "one": "Solid metal heel",
//                 "right": false
//             }, {
//                 "two": "Shaking my head",
//                 "right": true
//             }, {
//                 "three": "Shall make heed",
//                 "right": false
//             }, {
//                 "four": "Should me hate",
//                 "right": false
//             }]
//         }, {
//             'value': 200,
//             'question': "What was the first publicly traded U.S. company to reach a $1 trillion market cap?",
//             "answers": [{
//                 "one": "Samsung",
//                 "right": false
//             }, {
//                 "two": "Google",
//                 "right": false
//             }, {
//                 "three": "Sony",
//                 "right": false
//             }, {
//                 "four": "Apple",
//                 "right": true
//             }]
//         }, {
//             'value': 300,
//             'question': "On the popular social website Reddit, what does AMA stand for?",
//             "answers": [{
//                 "one": "Ask me anything",
//                 "right": true
//             }, {
//                 "two": "And me anyhow",
//                 "right": false
//             }, {
//                 "three": "Anytime mold answers",
//                 "right": false
//             }, {
//                 "four": "Amilia meet Andy",
//                 "right": false
//             }]
//         }, {
//             'value': 400,
//             'question': "Mark Zuckerberg was one of the founders of which social networking site?",
//             "answers": [{
//                 "one": "Facebbok",
//                 "right": true
//             }, {
//                 "two": "Twitter",
//                 "right": false
//             }, {
//                 "three": "Reddit",
//                 "right": false
//             }, {
//                 "four": "Instagram",
//                 "right": false
//             }]
//         }, {
//             'value': 500,
//             'question': "What was the first console video game that allowed the game to be saved?",
//             "answers": [{
//                 "one": "Super mario brothersb",
//                 "right": false
//             }, {
//                 "two": "Mario",
//                 "right": false
//             }, {
//                 "three": "The legend of zelda",
//                 "right": true
//             }, {
//                 "four": "The legend of the seeker",
//                 "right": false
//             }]
//         }
//         ]
//     }
// ]
// // ---------------------------------------------------------------------------Chemistry
// [
//     {
//         'name': 'Chemistry',
//         'questions': [{
//             'value': 100,
//             'question': "Which metallic element has a melting point of approximately −38 °F (−39 °C)?",
//             "answers": [{
//                 "one": "Silver",
//                 "right": false
//             }, {
//                 "two": "Mercury",
//                 "right": true
//             }, {
//                 "three": "Sulphur",
//                 "right": false
//             }, {
//                 "four": "Amonia",
//                 "right": false
//             }]
//         }, {
//             'value': 200,
//             'question': "How many electrons does a hydrogen atom have?",
//             "answers": [{
//                 "one": "Three",
//                 "right": false
//             }, {
//                 "two": "Two",
//                 "right": false
//             }, {
//                 "three": "Four",
//                 "right": false
//             }, {
//                 "four": "One",
//                 "right": true
//             }]
//         }, {
//             'value': 300,
//             'question': "What heavy metal element was once known as quicksilver?",
//             "answers": [{
//                 "one": "Mecury",
//                 "right": true
//             }, {
//                 "two": "Silver",
//                 "right": false
//             }, {
//                 "three": "Iron",
//                 "right": false
//             }, {
//                 "four": "Lithium",
//                 "right": false
//             }]
//         }, {
//             'value': 400,
//             'question': "What chemical element gives the blood of a lobster a bluish tint?",
//             "answers": [{
//                 "one": "Copper",
//                 "right": true
//             }, {
//                 "two": "Silver",
//                 "right": false
//             }, {
//                 "three": "iron",
//                 "right": false
//             }, {
//                 "four": "Mecury",
//                 "right": false
//             }]
//         }, {
//             'value': 500,
//             'question': "Which is the most abundant metal in the earth’s crust?",
//             "answers": [{
//                 "one": "Iron",
//                 "right": false
//             }, {
//                 "two": "Zinc",
//                 "right": false
//             }, {
//                 "three": "Aluminum",
//                 "right": true
//             }, {
//                 "four": "Copper",
//                 "right": false
//             }]
//         }
//         ]
//     }
// ]
//------------------------------------------------------------------------------- Harry Potter
// [
//     {

//         'name': 'Harry Potter',
//         'questions': [{
//             'value': 100,
//             'question': "What is the seventh and final novel of the Harry Potter series?",
//             "answers": [{
//                 "one": "SilveHarry Potter and the Deathly Hallows",
//                 "right": false
//             }, {
//                 "two": "Harry Potter and the Deathly Hallows",
//                 "right": true
//             }, {
//                 "three": "Harry Potter and the Goblet of Fire",
//                 "right": false
//             }, {
//                 "four": "Harry Potter and the Prisoner of Azkaban",
//                 "right": false
//             }]
//         }, {
//             'value': 200,
//             'question': "In the Harry Potter series, what is the name of Harry’s pet owl?",
//             "answers": [{
//                 "one": "Headwig",
//                 "right": false
//             }, {
//                 "two": "Franklin",
//                 "right": false
//             }, {
//                 "three": "Barry",
//                 "right": false
//             }, {
//                 "four": "Paul",
//                 "right": true
//             }]
//         }, {
//             'value': 300,
//             'question': "What heavy metal element was once known as quicksilver?",
//             "answers": [{
//                 "one": "Mecury",
//                 "right": true
//             }, {
//                 "two": "Silver",
//                 "right": false
//             }, {
//                 "three": "Iron",
//                 "right": false
//             }, {
//                 "four": "Lithium",
//                 "right": false
//             }]
//         }, {
//             'value': 400,
//             'question': "Emma Watson is known for playing which character in Harry Potter?",
//             "answers": [{
//                 "one": "Hermione Granger",
//                 "right": true
//             }, {
//                 "two": "Paula Chapman",
//                 "right": false
//             }, {
//                 "three": "Andrea Badass",
//                 "right": false
//             }, {
//                 "four": "Stanley Kimani",
//                 "right": false
//             }]
//         }, {
//             'value': 500,
//             'question': "Who directed the movie “Harry Potter and the Prisoner of Azkaban”?",
//             "answers": [{
//                 "one": "Ridley Scott",
//                 "right": false
//             }, {
//                 "two": "Steven Spielberg",
//                 "right": false
//             }, {
//                 "three": "Alfonso Cuarón",
//                 "right": true
//             }, {
//                 "four": "Martin Scorsese",
//                 "right": false
//             }]
//         }
//         ]
//     }
// ]

//------------------------------------------------------------------------------- Animal
// [
//     {

//         'name': 'Animal',
//         'questions': [{
//             'value': 100,
//             'question': "Orcinus orca is the scientific name for which animal?",
//             "answers": [{
//                 "one": "Lion",
//                 "right": false
//             }, {
//                 "two": "Killer Whale",
//                 "right": true
//             }, {
//                 "three": "Shark",
//                 "right": false
//             }, {
//                 "four": "Sea Horse",
//                 "right": false
//             }]
//         }, {
//             'value': 200,
//             'question': "Which bird has eyes that are larger than its brain?",
//             "answers": [{
//                 "one": "Bee",
//                 "right": false
//             }, {
//                 "two": "Kangaroo",
//                 "right": false
//             }, {
//                 "three": "Eagle",
//                 "right": false
//             }, {
//                 "four": "Ostrich",
//                 "right": true
//             }]
//         }, {
//             'value': 300,
//             'question': "What is the only snake in the world that builds a nest for its eggs?",
//             "answers": [{
//                 "one": "King Cobra",
//                 "right": true
//             }, {
//                 "two": "Python",
//                 "right": false
//             }, {
//                 "three": "Anaconda",
//                 "right": false
//             }, {
//                 "four": "viper",
//                 "right": false
//             }]
//         }, {
//             'value': 400,
//             'question': "What is the only mammal born with horns?",
//             "answers": [{
//                 "one": "Giraffe",
//                 "right": true
//             }, {
//                 "two": "Horser",
//                 "right": false
//             }, {
//                 "three": "Goat",
//                 "right": false
//             }, {
//                 "four": "Cow",
//                 "right": false
//             }]
//         }, {
//             'value': 500,
//             'question': "A wombat is a marsupial native to which country?",
//             "answers": [{
//                 "one": "India",
//                 "right": false
//             }, {
//                 "two": "America",
//                 "right": false
//             }, {
//                 "three": "Australia",
//                 "right": true
//             }, {
//                 "four": "Argentina",
//                 "right": false
//             }]
//         }
//         ]
//     }
// ]
//------------------------------------------------------------------------------- Biology

// [
//     {
//         'name': 'Biology',
//         'questions': [{
//             'value': 100,
//             'question': "What part of the human body contains five metacarpal bones?",
//             "answers": [{
//                 "one": "The Foot",
//                 "right": false
//             }, {
//                 "two": "The Hand",
//                 "right": true
//             }, {
//                 "three": "The Neck",
//                 "right": false
//             }, {
//                 "four": "The chest",
//                 "right": false
//             }]
//         }, {
//             'value': 200,
//             'question': "The adult human skeleton is made of up how many bones?",
//             "answers": [{
//                 "one": "520",
//                 "right": false
//             }, {
//                 "two": "110",
//                 "right": false
//             }, {
//                 "three": "240",
//                 "right": false
//             }, {
//                 "four": "206",
//                 "right": true
//             }]
//         }, {
//             'value': 300,
//             'question': "What is the most common blood type in humans?",
//             "answers": [{
//                 "one": "0+",
//                 "right": true
//             }, {
//                 "two": "A+",
//                 "right": false
//             }, {
//                 "three": "B+",
//                 "right": false
//             }, {
//                 "four": "AB+",
//                 "right": false
//             }]
//         }, {
//             'value': 400,
//             'question': "What chemical element gives the blood of a lobster a bluish tint?",
//             "answers": [{
//                 "one": "Copper",
//                 "right": true
//             }, {
//                 "two": "Silver",
//                 "right": false
//             }, {
//                 "three": "iron",
//                 "right": false
//             }, {
//                 "four": "Mecury",
//                 "right": false
//             }]
//         }, {
//             'value': 500,
//             'question': "The molecule “hemoglobin” is used in which type of cells?",
//             "answers": [{
//                 "one": "White blood cells",
//                 "right": false
//             }, {
//                 "two": "Black blood cells",
//                 "right": false
//             }, {
//                 "three": "Red blood cells",
//                 "right": true
//             }, {
//                 "four": "Yellow blood cells",
//                 "right": false
//             }]
//         }
//         ]
//     }
// ]
//------------------------------------------------------------------------------- Dog
// [

//     {
//         'name': 'Dog',
//         'questions': [{
//             'value': 100,
//             'question': "The dingo is a type of feral dog native to which country?",
//             "answers": [{
//                 "one": "Nigeria",
//                 "right": false
//             }, {
//                 "two": "Australia",
//                 "right": true
//             }, {
//                 "three": "England",
//                 "right": false
//             }, {
//                 "four": "Ghana",
//                 "right": false
//             }]
//         }, {
//             'value': 200,
//             'question': "The Chihuahua is a breed of dog believed to originate from what country?",
//             "answers": [{
//                 "one": "Brazil",
//                 "right": false
//             }, {
//                 "two": "Congo",
//                 "right": false
//             }, {
//                 "three": "Jamaica",
//                 "right": false
//             }, {
//                 "four": "Mexico",
//                 "right": true
//             }]
//         }, {
//             'value': 300,
//             'question': "The Alaskan Malamute is a type of what?",
//             "answers": [{
//                 "one": "Dog",
//                 "right": true
//             }, {
//                 "two": "Horse",
//                 "right": false
//             }, {
//                 "three": "Bird",
//                 "right": false
//             }, {
//                 "four": "Cow",
//                 "right": false
//             }]
//         }, {
//             'value': 400,
//             'question': "A puggle is a cross between which two dog breeds?",
//             "answers": [{
//                 "one": "Pug and Beagle",
//                 "right": true
//             }, {
//                 "two": "Pug and Bulldog",
//                 "right": false
//             }, {
//                 "three": "Pug and Mastiff",
//                 "right": false
//             }, {
//                 "four": "Pug and Pitbull",
//                 "right": false
//             }]
//         }, {
//             'value': 500,
//             'question': "How many chambers are there in a dog’s heart?",
//             "answers": [{
//                 "one": "Three",
//                 "right": false
//             }, {
//                 "two": "Five",
//                 "right": false
//             }, {
//                 "three": "Four",
//                 "right": true
//             }, {
//                 "four": "Two",
//                 "right": false
//             }]
//         }
//         ]
//     }
// ]

