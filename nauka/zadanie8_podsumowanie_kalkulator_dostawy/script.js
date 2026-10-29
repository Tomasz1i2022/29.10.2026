// Twoje rozwiązanie
const weight = Number(prompt("Podaj wagę paczki w kilogramach:"));
const overweight = Math.max(0, weight - 1);
const price = 12 + Math.ceil(overweight) * 3;
const roundedPrice = Math.round(price * 100) / 100;

document.getElementById("wynik").textContent = "Koszt dostawy: " + roundedPrice.toFixed(2) + " zł";