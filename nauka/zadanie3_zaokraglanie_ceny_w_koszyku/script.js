// Twoje rozwiązanie
const price = Number(prompt("Podaj cenę produktu:"));
const sale = Number(prompt("Podaj rabat w procentach:"));
const loweredPrice = Math.round(price * (1 - sale / 100) * 100) / 100;

document.getElementById("wynik").textContent = "Cena po rabacie: " + loweredPrice.toFixed(2) + " zł";