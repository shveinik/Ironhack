var hacker1 = "Max"
console.log("The driver's name is: " + hacker1);

var hacker2 = prompt("What's your name?");
console.log("The navigator's name is: " + hacker2)

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, Navigator got the longest name, it has " + hacker2.length + " characters")
} else ("wow, you both got equally long names, " + hacker1.length + "characters")


for (i = 0; i < hacker1.length; i++) {

  console.log(hacker1.toUpperCase().charAt(i))
}

for (i = hacker2.length; i >= 0 ; i--) {
  console.log(hacker2.charAt(i))
}

function palindrome(phrase){
  return phrase.replace(/[^\w]/g, "")
}


if (hacker1 > hacker2) {
  console.log("The Driver's name goes first")
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What, you both got the same name?")
}

// var palindrome = prompt("Type the words");
// for (i = palindrome.length -1; i > 0; i--){
//     if(palindrome[i] === palindrome.charAt(palindrome.length)-1){
//       console.log("The word is polindrome")
//     }else{console.log("No, its not")}

// }
