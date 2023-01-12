// Code your solutions in this file

// debug
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}


// //using "for" with Arrays
const gifts = ["teddy bear", "drone", "doll"];

function wrapGidts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGidts(gifts);


// // assignment: build a "Thank you" card creator
const nameList = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";
const messageHolder = [];


function writeCards(names, event) {
    

    for (let i = 0; i < names.length; i++) {
        messageHolder.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        // debugger;

    }

    return messageHolder;
    
    
}


// console.log(writeCards(nameList, eventName));
// writeCards(nameList, eventName);  // return in console


//  write a function, countDown, that takes in any positive integer 
function countDown(startFrom) {

    while (startFrom >= 0) {
        console.log(startFrom);
        startFrom--;
    }
}


countDown(10)