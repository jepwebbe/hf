// 1. Konverter array til en Tekststreng
let wroom = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
document.querySelector("#cars1").innerHTML = "1 " + wroom.join(" og ");
// 2. Fjern SIDSTE element 
let wroom2 = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
wroom2.pop()
let wroomLet = document.querySelector("#cars2").innerHTML = "2 " + wroom2;
// 3. Tilføj SIDSTE element 
let wroom3 = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
wroom3.push("Mazda")
let wroomMazda = document.querySelector("#cars3").innerHTML = "3 " + wroom3;
// 4. FJERN FØRSTE element
let wroom4 = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
wroom4.shift()
let wroomShift = document.querySelector("#cars4").innerHTML = "4 " + wroom4;
// 5. Tilføj første element
let wroom5 = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
wroom5.unshift("Nissan")
let wroomUnshift = document.querySelector("#cars5").innerHTML = "5 " + wroom5;
// 6. TILFØJE ELEMENTER
let wroom6 = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
wroom6.splice(5, 0, "Kia", "Seat", "Peugeot")
let wroomSplice = document.querySelector("#cars6").innerHTML = "6 " + wroom6;
// 6. 7. Udskær element
let wroom7 = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
let wroomSlice = wroom7.slice(4, 5)
document.querySelector("#cars7").innerHTML = "7 " + wroomSlice;
let wroomSlice2 = wroom6.slice(1, 7)
document.querySelector("#cars7-2").innerHTML = "7-2 med variabel fra opg 6 " + wroomSlice2;
