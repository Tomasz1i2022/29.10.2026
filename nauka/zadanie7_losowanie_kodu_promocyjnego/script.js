// Twoje rozwiązanie
const number = Math.floor(Math.random() * 1000000);
const code = String(number).padStart(6, "0");

document.getElementById("wynik").textContent = "Kod promocyjny: " + code;