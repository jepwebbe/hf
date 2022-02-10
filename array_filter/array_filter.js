// Øvelse 1: Returner et nyt array, der kun har de tal, der er 5 eller større.
const arr = [3, 6, 8, 2];

const plusFive = arr.filter(fiveOver => fiveOver > 4);
console.log(plusFive);

// Øvelse 2: Returner et nyt array, der kun inkluderer lige tal.
let evens = arr.filter(number => number % 2 == 0);
console.log(evens);
// Øvelse 3: Returner et nyt array, der kun inkluderer de strenge, der har en længde på 5 tegn eller færre
const fiveAnimal = ["hund", "ulv", "kanin", "marsvin", "hamster", "kat"]
const fivePlusLength = fiveAnimal.filter(animalLength => animalLength.length <= 5);
console.log(fivePlusLength);

// Øvelse 4: Returner et nyt array, der har filtreret alle dem, der ikke har et royalt navn.
const royalNames = [
    { name: "Mette", royal: false },
    { name: "Magrethe", royal: true },
    { name: "Jakob", royal: false },
    { name: "Mary", royal: true },
    { name: "Frederik", royal: true } 
]
const royalRoyal = royalNames.filter(royalTrue => {
    if (royalTrue.royal == true) {return royalTrue.name};
});
console.log(royalRoyal);
// Øvelse 5: Lav en filtreret liste over alle de mennesker, der er over 18
const ofAge = [
        { name: "Mette Frederiksen", age: 80 },
        { name: "Jakob Elleman", age: 2 },
        { name: "Søren Pape", age: 5 },
        { name: "Pia Olsen Dyhr", age: 16 },
        { name: "Pernille Skipper", age: 100 },
        { name: "Kristian Thulesen Dahl", age: 54 }
]
const ofAgeOld = ofAge.filter(ageOld => {
    if (ageOld.age >= 18 ) {return ageOld};
});
console.log(ofAgeOld);

// Øvelse 6a, Filtrer Mercedes biler
const cars = [
    {name: 'Mercedes', model: 'E220', kml: 23.3, km: 138000, year: 2018, price: 439000},
    {name: 'Honda', model: 'Accord', kml: 11.6, km: 96000, year: 2012, price: 199600},
    {name: 'Seat', model: 'Tarraco', kml: 18.1, km: 15000, year: 2020, price: 424500},
    {name: 'VW', model: 'Fox', kml: 14.8, km: 167000, year: 2005, price: 19990},
    {name: 'Skoda', model: 'Scala', kml: 27.5, km: 8500, year: 2020, price: 244900},
    {name: 'Jaguar', model: 'F-Type', kml: 11.9, km: 33000, year: 2017, price: 899900},
    {name: 'Toyota', model: 'Avensis', kml: 16.7, km: 356000, year: 2005, price: 19900},
    {name: 'VW', model: 'Golf', kml: 19.6, km: 35000, year: 2018, price: 209800},
    {name: 'Mercedes', model: 'AMG', kml: 12.9, km: 21000, year: 2019, price: 679900}
]
const carsMercer = cars.filter(mercerTrue => {
    if (mercerTrue.name == "Mercedes") {return mercerTrue};
});
console.log(carsMercer);
// Øvelse 6b Filtrer biler ud fra hvor mindstepris er 200000
const carsMoney = cars.filter(moneyHigh => {
    if (moneyHigh.price >= 20000) {return moneyHigh};
});
console.log(carsMoney);
// Øvelse 6c Filtrer biler ud fra hvor mindstepris er 200000 og minimum 15 kilometer på literen.
const carsEfficient = cars.filter(efficiencyHigh => {
    if (efficiencyHigh.price >= 20000) if (efficiencyHigh.kml >= 15 ) {return efficiencyHigh};
});
console.log(carsEfficient);