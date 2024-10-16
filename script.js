const text = "TECHIESOCK";
let index = 0;
setTimeout(
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Adjust typing speed here (in milliseconds)
    }
},200)


