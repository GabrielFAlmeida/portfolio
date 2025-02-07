// Function to check if a number is a multiple of 3 or 5
function main(): void {
    let n: number = 15;
    fizzBuzz(n);
}

function isThreeOrFiveMultiple(i: number): string | number {
    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
    } else if (i % 3 === 0) {
        return "Fizz";
    } else if (i % 5 === 0) {
        return "Buzz";
    } else {
        return i;
    }
}

function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        const status = isThreeOrFiveMultiple(i);
        console.log(status);
    }
}

// Call the main function to execute the code
main();