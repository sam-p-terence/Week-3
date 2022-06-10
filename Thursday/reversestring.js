
// const num = 123433453456;

// const reversedNum = (num) => {
//   return Math.floor(num / 10);
// };

// const remBy10 = (num) => {
//     return Math.floor(num % 10);
// };

// const reverseNum = (num, str = "") => {
//   if (num.toString().length == 1) return (str += num);
//   return reverseNum(reversedNum(num), (str += remBy10(num)));
// };

// console.log(reverseNum(num, ""));



// let number = 2341251234, reverse = 0;

// while (number > 0) {
//     remainder = number % 10;
//     reverse = reverse * 10 + remainder;
//     number = Math.floor(number / 10);
// }

// console.log(reverse);


const printDigits = num => {
    while (num) {
    let digitToPrint = num % 10
    console.log(digitToPrint)
    num = (num - digitToPrint) / 10
}
}

printDigits(1214123)