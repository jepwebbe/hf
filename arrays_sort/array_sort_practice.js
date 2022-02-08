// 1. Stigende alfabetisk sortering
let wroom = ["Datsun", "Mercedez", "Volvo", "BMW", "Fiat", "Toyota", "Citroën", "Tesla", "Opel"]
document.querySelector("#cars1").innerHTML = "1 Stigende: " + wroom.sort();

// 2. FALDENDE ALFABETISK SORTERING
document.querySelector("#cars2").innerHTML = "2 Faldende: " + wroom.reverse();

// 3. Stigende numerisk sortering
let wroomArray =[];
for (let i = 0; i < wroom.length; i++) {
    wroomArray.push(wroom[i].length);
}
wroomArray.sort(function(a, b){return b - a});
console.table(wroomArray)

const wroomArrayUp = wroomArray.sort(function(a, b){return a - b});
console.table(wroomArrayUp);

// 4. FALDENDE NUMERISK SORTERING

// 5. Random SORTERING
document.querySelector("#cars5").innerHTML = "5 Random: " + wroom.sort(function (a, b) { return 0.5 - Math.random() });;

// 6. Sortering af arrays med objekter
let wroomObjects = [
    { name: "Mercedes", year: 2010, doors: 5, persons: 5, price: 105000 },
    { name: "Volvo", year: 2016, doors: 5, persons: 7, price: 405000 },
    { name: "BMW", year: 2014, doors: 3, persons: 2, price: 375000 },
    { name: "Fiat", year: 2011, doors: 3, persons: 5, price: 60000 },
    { name: "Toyota", year: 2016, doors: 7, persons: 9, price: 450000 },
    { name: "Citroen", year: 1999, doors: 5, persons: 5, price: 12000 },
    { name: "Tesla", year: 2019, doors: 5, persons: 5, price: 675000 },
    { name: "Opel", year: 2010, doors: 3, persons: 5, price: 45000 }
] 
// efter navn
function myFunction(){ wroomObjects.sort(function(a, b){
    let x = b.name.toLowerCase();
    let y = a.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }); 
  displayCars();
}
function displayCars() {
    document.querySelector("#demo").innerHTML = wroomObjects[0].name + wroomObjects[1].name + wroomObjects[2].name + wroomObjects[3].name+ wroomObjects[4].name + wroomObjects[5].name + wroomObjects[6].name + wroomObjects[7].name
}
// efter årgang
const wroomObjectsYear = wroomObjects.sort(function (a, b) {return b.year - a.year});
console.table(wroomObjectsYear)
// efter døre
const wroomObjectsDoors = wroomObjects.sort(function (a, b) {return a.doors - b.doors});
console.table(wroomObjectsDoors);
// efter personer 
const wroomObjectsPersons = wroomObjects.sort(function (a, b) {return b.persons - a.persons});
console.table(wroomObjectsPersons);
// efter pris stigende
const wroomObjectsPriceUp = wroomObjects.sort(function (a, b) {return a.price - b.price});
console.table(wroomObjectsPriceUp);
// efter pris faldende
const wroomObjectsPriceDown = wroomObjects.sort(function (a, b) {return b.price - a.price});
console.table(wroomObjectsPriceDown);