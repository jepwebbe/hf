// Øvelse 1: Lav en fordobling af værdierne i det oprindelige array.
let arr = [2, 5, 100];
let arrDouble = arr.map((val, i, arr) => {
    return val * 2;
  });
console.log(arrDouble);
// Øvelse 2: Tag en række tal og lav dem til strenge
let arrString = arr.map(() => {
    return arr.toString();
  });
  console.log(arrString)
// Øvelse 3: Lav navne med stort
let arrLow = ["hans", "peter", "gringo"]
let arrUp = arrLow.map(name => name.toUpperCase());
console.log(arrUp);
// Øvelse 4: Lav et array med navnene
let arrFamous = [
    {
        name: "Mads Mikkelsen",
        age: 80
    },
    {
        name: "Sofie Gråbøl",
        age: 2
    },
    {
        name: "Sidse Babett Knudsen",
        age: 5
    },
    {
        name: "Nikolaj Lie Kaas",
        age: 16
    },
    {
        name: "Frank Hvam",
        age: 100
    }
]

let arrFamousNames = arrFamous.map(Names => Names.name);
console.log(arrFamousNames);

//Øvelse 5: Er du gammel nok?
let arrOldEnough = arrFamous.map(oldEnough => {
   if (oldEnough.age > 18) {return oldEnough.name + " er gammel nok "};
   if (oldEnough.age < 18) {return oldEnough.name + " er ikke gammel nok"};
})
console.log(arrOldEnough);

//Øvelse 6: Lav et array med navne som h1'ere og alder som h2'ere
let arrDOM = arrFamous.map(DOMify => {
    return "<h1>" + DOMify.name + "</h1>" + "<h2>" + DOMify.age + "</h2>";
})
console.log(arrDOM);