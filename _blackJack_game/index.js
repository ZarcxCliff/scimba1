

let isAlive = false;
let blackJack = false;
let player = {
    Nam :"Zarcx" ,
    Chip :145

}


let card = [random(), random(), random()];
let sum = card[0] + card[1];
let player_El = document.getElementById("Player")
player_El.textContent = player.Nam + ': $' + player.Chip;
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let message = " "
function random() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
        return 10;
    } else if (randomNum === 1) {
        return 11;
    } else {
        return randomNum
    }
}
function startGame() {

    if (sum <= 20) {
        message = "do u want to draw a new card 😅?"
        isAlive = true;
    } else if (sum === 21) {
        message = "u won , you've  got the BlackJack😁🤩🤗"
        blackJack = true;
    } else {
        message = "u loss, U are out of the game 😥"
        isAlive = false;
    }
    document.getElementById("card").textContent = sum;
    document.getElementById("message").textContent =message;
    first.textContent = card[0];
    second.textContent = card[1];
}
function newCard() {
    if (isAlive === true && blackJack === false) {
        
        let nwcard = random();
       sum  += nwcard;
           card.push(nwcard)
           document.getElementById("third").textContent += nwcard + "  ";
               startGame()
    }
//     if ( newSum <= 20) {
//         message="do u want to draw a new card 😅?"
//          } else if ( newSum=== 21) {
//         message="u won , you've  got the BlackJack😁🤩🤗"
//          } else {
//              message="u loss, U are out of the game 😥"
//          }

 }

// let randomNum = Math.random() * ;
// let floorNum = Math.floor(6.9478)
// let floorNum = Math.floor(Math.random()*6)

// console.log(floorNum)

// function dice() {
//     let randomNum = Math.floor(Math.random() * 6) + 1;
//     return randomNum;
// }
// let gamble = dice();
// console.log(gamble);

// let likesDoc = true;
// let likeStart = false;
// if (likeStart == true || likesDoc == true) {
//      recommendMovie()
// }
// function recommendMovie() {
//     console.log("Heay , check out this new movies, u might like them")
// }

// let airBnB = {
//     name: "castel",
//     location: "France",
//     price: ["$70","per hour"],
//     time: ["night", "full day"],
//     numberOfPeople: {
//         male: 10,
//         female: 12
//     },
//     party: false,
// };
// console.log(airBnB.numberOfPeople.male)
// console.log(airBnB.numberOfPeople)
// console.log(airBnB.time)
// console.log(airBnB.price[0]);


// let person = {
//     name: "Atanga Cheboh",
//     age: 28,
//     country:"Cameroon"

// };
// function logDAta() {
//     let data = `${person.name} is ${person.age}
//     years old and lives in ${person.country}`;
//     return data;
// }
// console.log(logDAta())

// let age = 15;
// if (age < 6) {
//     console.log("free")
// }else if (age >= 6 && age <= 17) {
//     console.log("child discount")
// } else if (age >= 18 && age <= 26) {
//     console.log("student discount")
// } else if (age >= 27 && age <= 66) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }
// console.log(`The largest countries in the world`)

// let largecountries = ['china', 'india', 'usa', 'indonesia', 'pakistan'];
// for (let i = 0; i < largecountries.length; i++){
   
//     console.log('-' + largecountries[i])
// };


// let largecountries = ['tuvalu', 'india',
//     'usa', 'indonesia', 'monaco']

// largecountries.pop();
// console.log(largecountries);
// largecountries.push("pakistan");
// console.log(largecountries);
// largecountries.shift();
// console.log(largecountries);
// largecountries.unshift("china");
// console.log(largecountries);
// for (let i = 0; i < largecountries.length; i++){
   
//         console.log('-' + largecountries[i])
//      };

// let dayOfMonth =13 ;
// let weekDay = "Friday";
// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("😱")
// }

// let hands = ["rock", "papper", "scissor"];

// function rps() {
 
//     // console.log(ran)
//     let ran = Math.floor(Math.random() * 3);
//     return hands[ran];
    
    
// }
// let game = rps();
//    console.log(game)


// let fruit = ['🍎', '🍊', '🍎', '🍎', '🍊'];
// let appleshelf= document.getElementById("apple")
// let orangeshelf = document.getElementById("orange");
// for (let i = 0; i < fruit.length; i++){
//     if (fruit[i] === '🍎') {
//         appleshelf.textContent += fruit[i];
//     } else {
//         orangeshelf.textContent += fruit[i]
//     }
//     console.log(fruit[i])
// }