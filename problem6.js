var age = 17; 
var PassedWrittenTest = true; 


if (age >= 16) {
    if (PassedWrittenTest) {
        console.log("You are eligible to obtain a driver's license.");
    } else {
        console.log("You are not eligible to obtain a driver's license because you haven't passed the written test.");
    }
} else {
    console.log("You are not eligible to obtain a driver's license because you are under 16.");
}