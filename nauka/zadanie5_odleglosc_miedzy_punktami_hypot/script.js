// Twoje rozwiązanie
const x1 = Number(prompt("Podaj x1:"));
const y1 = Number(prompt("Podaj y1:"));
const x2 = Number(prompt("Podaj x2:"));
const y2 = Number(prompt("Podaj y2:"));

const dx = x2 - x1;
const dy = y2 - y1;

const distance = Math.round(Math.hypot(dx, dy) * 100) / 100;

document.getElementById("wynik").textContent = "Odległość: " + distance;