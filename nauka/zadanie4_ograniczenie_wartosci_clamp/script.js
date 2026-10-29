// Twoje rozwiązanie
const min = 0;
const max = 100;
const number = Number(prompt("Podaj liczbę:"));

const result = Math.min(max, Math.max(min, number));

document.getElementById("wynik").textContent = "Wynik po clamp: " + result;