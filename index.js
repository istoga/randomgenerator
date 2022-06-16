// javascript
let output = document.getElementById("randomOutput")


// function random() {
//     let answer =  Math.floor(Math.random() * 500) + 1
//     output.textContent = answer
// }

// random()

var numbers = []; // new empty array

var min, max, r, n, p;

min = 1;
max = 500;
r = 6; // how many numbers you want to extract

function generate() {

for (let i = 0; i < r; i++) {
  do {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    p = numbers.includes(n);
    if(!p){
      numbers.push(n);
    }
  }
  while(p);
  output.textContent = numbers.join(" , ")
}
}

// console.log(numbers.join(" , "));

function reset() {
   numbers.length = 0
   output.textContent = ""
}

