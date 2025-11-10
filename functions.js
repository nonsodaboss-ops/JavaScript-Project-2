//Reverses a string
function stringReverse(str){            
    reversed = str.split('').reverse().join('');
    return reversed;
}
//Example:
console.log(stringReverse('good'))

//Counts the number of characters in a string
function characterCount(str){
    total = 0;
    for(i = 0; i < str.length; i++){
        total += 1
    }
    return total
}
//Example:
console.log(characterCount('accomodation'))

//Capitalizes the first letter of each word in a sentence
function capitalizeWords(sentence){
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//Example:
console.log(capitalizeWords('I am a young man'))

//Finds the maximun value in an array of numbers
function maxValue(arr) {
    return Math.max(...arr);
}
console.log(maxValue([2, 29, 22, 908, 34]))

//Finds the minimum value in an array of numbers
function minValue(arr) {
    return Math.min(...arr);
}
//Example:
console.log(minValue([2, 29, 22, 908, 34]))

//Calculates the sum of all elements in an array
function sumOfElements(arr){
    sum = 0
    i = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
//Example:
console.log(sumOfElements([2, 3, 6, 65, 13]))

//Filters out elements from an array based on given condition(only odd numbers)
function oddFilter(arr){
    return arr.filter(num => num % 2 !== 0);
}
//Example:
console.log(oddFilter([1, 2, 3, 4, 5, 6, 7]))

//Calculates the factorial of a given number
function factorial(x){
    let result = 1
    if(x < 0) {return undefined}
    else if(x == 0) {return 1}
    else {for(let i = 1; i <= x; i++){
        result *= i;
    }}
    return result
}
//Example:
console.log(factorial(6))

//Checks if a number is prime or not
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true; 
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
//Example:
console.log(isPrime(79))

//Generates the Fibonacci sequence up to a given number of terms
function generateFibonacci(n){
    if (n <= 0) return []
    const sequence = [0]
    if (n === 1) return sequence
    sequence.push(1)
    for(let i = 2; i < n; i++){
        const nextTerm = sequence[i - 1] + sequence[i - 2]
        sequence.push(nextTerm)
    }
    return sequence
}
//Example:
console.log(generateFibonacci(10))