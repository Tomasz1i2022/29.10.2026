// Twoje rozwiązanie
const r = Number(prompt("Podaj promień koła:"));
const area = Math.round(Math.PI * Math.pow(r, 2) * 100) / 100;

document.getElementById("wynik").textContent = "Pole koła: " + area.toFixed(2);