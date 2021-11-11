const colors = ["pink", "orange", "blue", "green", "yellow", "red"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
 // get rand num btwn 0-3 *color[3]*
 const randomNumber = getRandomNum();
 console.log(randomNumber);

 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

function getRandomNum() {
 return Math.floor(Math.random() * colors.length);
}























