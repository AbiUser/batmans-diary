document.getElementById('enter-btn').addEventListener('click', () => { 
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('title').style.display = 'none';
    document.getElementById('demo').style.display = 'block';
    typeWriter();
});

var i = 0;
var txt ="Access Restricted Dive into the enigmatic mind of the Dark Knight! To explore Batman's deeper thoughts and uncover the mysteries of Gotham's silent guardian, please login or register for an account."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}