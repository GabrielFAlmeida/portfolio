// Function to check if a number is a multiple of 3 or 5
function main() {
    var n = 17;
    fizzBuzz(n);
}
function isThreeOrFiveMultiple(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
    }
    else if (i % 3 === 0) {
        return "Fizz";
    }
    else if (i % 5 === 0) {
        return "Buzz";
    }
    else {
        return i;
    }
}
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        var status_1 = isThreeOrFiveMultiple(i);
        console.log(status_1);
    }
}
// Call the main function to execute the code
main();
