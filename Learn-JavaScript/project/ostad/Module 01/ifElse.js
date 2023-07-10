/*Assignment: If-Else Practice
Declare and assign the temperature variable */
let temperature = 28;

// Check if temperature is greater than or equal to 30
if(temperature>=30){
    console.log("It's a hot day!");
}else{
    console.log("It's a normal day!");
}


// Declare and assign the isRaining variable
let isRaining = true;

// Check if it's raining
if(isRaining){
    console.log("Don't forget your umbrella!");
}else{
    console.log("Enjoy your day!");
}


// Declare and assign the time variable
let time = 17; // Replace with the actual hour value

// Check the time of the day
if (time >= 6 && time <= 12) {
  console.log("Good morning!");
} else if (time > 12 && time <= 18) {
  console.log("Good afternoon!");
} else if (time > 18 && time <= 24) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}