function generateRandomNum() {
    let num = Math.floor(Math.random() * (10000000000 - 1));
    return num;
}

function reverseNum(num) {
    let reverse = 0;
    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reverse;
}

function main() {
    let num = generateRandomNum();
    console.log("Generated number is " + num);
    console.log("Reversed number of generated number is " + reverseNum(num));
}
main();
