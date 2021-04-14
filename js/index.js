// Iteration 1: Names and Input
var hacker1 = "Pol"; // 1.1

console.log(`"The driver's name is ${hacker1}"`); // 1.2

var hacker2 = "Lisa"; // 1.3

console.log(`"The navigator's name is ${hacker2}"`); //1.4


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
 }
 else if (hacker2.length > hacker1.length){
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
 }
 else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
 }

// Iteration 3: Loops

let nameBig = " " // 3.1
for (let i = 0; i < hacker1.length; i++)
{
    nameBig += hacker1[i] + ' ';
}
console.log(nameBig.toUpperCase());

let nameReversed = "" // 3.2
for (let i = hacker1.length - 1; i >= 0; i--) {
    nameReversed += hacker1[i];
}
console.log(nameReversed);

let alphabet = "abcdefghijklmnopqrstuvwxyz"; // 3.3
const firstLetterHacker1 = alphabet[11];
const firstLetterHacker2 = alphabet[11];
if (firstLetterHacker1 < firstLetterHacker2){   
    console.log(`The driver's name goes first`);
     }
     else if (firstLetterHacker1 > firstLetterHacker2){
         console.log(`Yo, the navigator goes first definitely.`);
     }
     else if (firstLetterHacker1 === firstLetterHacker2){
        console.log(`What?! You both have the same name?`);
     }

     // 3.3 : boucle non terminée puisqu'elle ne prend en compte que la première lettre.
     // Nous n'avons pas encore trouvé comment faire une demande pour chaque lettre de chaque prénom.