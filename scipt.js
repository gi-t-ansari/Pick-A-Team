document.getElementById("csk").style.display = "block";
document.getElementById("rcb").style.display = "none";
document.getElementById("mi").style.display = "none";

const cskButton = document.getElementById("csk-btn");
cskButton.addEventListener("click", function() {
    document.getElementById("csk").style.display = "block";
    document.getElementById("rcb").style.display = "none";
    document.getElementById("mi").style.display = "none";
})

const rcbButton = document.getElementById("rcb-btn");
rcbButton.addEventListener("click", function() {
    document.getElementById("rcb").style.display = "block";
    document.getElementById("csk").style.display = "none";
    document.getElementById("mi").style.display = "none";
})

const miButton = document.getElementById("mi-btn");
miButton.addEventListener("click", function() {
    document.getElementById("mi").style.display = "block";
    document.getElementById("rcb").style.display = "none";
    document.getElementById("csk").style.display = "none";
})