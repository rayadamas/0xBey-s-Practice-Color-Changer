const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// from app.js #f15025
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
 let hexColor = '#'; // var to hold or hashtag
 for(let i = 0; i < 6; i++) {
  hexColor += hex[getRandomNum()];// `+=` lets us access our `hex`, gen a value that will have `#` + the
  // six values within `hex`  
  //`hexColor = hex[0];` would only OVERRIDE the `hex` value and set it to `0`
 }



 color.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
});

function getRandomNum() {
 return Math.floor(Math.random() * hex.length);
}



















