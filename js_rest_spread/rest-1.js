function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Vladimir Putin
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log("Længden på arrayet er " + titles.length ); // 3

    console.log(titles[0]); // Præsident
    console.log(titles[1]); // Tzar
    console.log(titles[2]); // Betvinger af verdener
  }
  
  showName("Vladimir", "Putin", "Præsident", "Tzar", "Betvinger af verdener");
  // https://javascript.info/rest-parameters-spread