// cd codingTemple\week7\day2\w7d2_more_exercises

// sort an integer in descending order
let n = 12345763554999
function descendingOrder(n){
    return parseInt(n.toString().split("").sort().reverse().join(""));
}
console.log(descendingOrder(n));









// sum digits of a number until it only has one digit
function sumDigits(inputInt) {
    while(inputInt.toString().length>1){
        let sum=0;
        for(digit of inputInt.toString().split("")){
            sum += parseInt(digit);
        }
        inputInt = sum;
    }
    return inputInt;
}
console.log(sumDigits(n));


// another cool solution that is definitely not mine:
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
//   a math explanation I found:
//   http://applet-magic.com/Digitsum00.htm