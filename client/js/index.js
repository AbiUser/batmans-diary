document.getElementById('enter-btn').addEventListener('click', () => { 
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('title').style.display = 'none';
   
    typeWriter();
    
});

var i = 0;
var txt1 = "Access is restricted to authorized users only."; /* The text */
var txt2 = "All activities on this site are logged and monitored.";
var txt = "Dive into the enigmatic mind of the Dark Knight! To explore Batman's deeper thoughts and uncover the mysteries of Gotham's silent guardian, please login or register for an account."; /* The text */
var txt3 = "Unauthorized access will be prosecuted to the fullest extent of the law."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var currentTxt = "txt1"; // Current text being typed
function typeWriter() {
    if (currentTxt === "txt1" && i < txt1.length) {
        console.log("txt1");
        document.getElementById("demotitle").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (currentTxt === "txt1") {
        i = 0; // Reset index
        currentTxt = "txt2"; // Move to next text
        setTimeout(typeWriter, speed); // Add delay before starting next text
    } else if (currentTxt === "txt2" && i < txt2.length) {
        document.getElementById("demoh2").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (currentTxt === "txt2") {
        i = 0; // Reset index
        currentTxt = "txt"; // Move to next text
        setTimeout(typeWriter, speed); // Add delay before starting next text
    } else if (currentTxt === "txt" && i < txt.length) {
       
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if (currentTxt === "txt" && i >= txt.length) {
        i = 0; // Reset index
        currentTxt = "txt3"; // Move to next text
        setTimeout(typeWriter, speed); // Add delay before starting next text
    }
    else if (currentTxt === "txt3" && i < txt3.length) { 
    
        
        document.getElementById("footer").innerHTML += txt3.charAt(i);
        i++;
        setTimeout(typeWriter, speed); // Add delay before starting next text
    }
}
