// Check marital eligibility
var gender = "male";
var age = 20;

if (gender === 'male') {
    if (age >= 21) {
        console.log("Eligible male for marriage");
    } else {
        console.log("Male not eligible for marriage");
    }
} else if (gender === 'female') {
    if (age >= 18) {  
        console.log("Eligible female for marriage");
    } else {
        console.log("Female not eligible for marriage");
    }
} else {
    console.log("Invalid gender specified");
}
