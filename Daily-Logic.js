// =================== PROBLEMS ===================

// Problem 1: Reverse a string (no .reverse())
function reverseString(str) {
    if (!str) return "";
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

// Problem 2: Find the longest word in a sentence
function findLongestWord(sentence) {
    if (!sentence || sentence.trim() === "") return "";

    const wordArray = sentence
        .replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, " ")
        .split(" ");

    let longestWord = wordArray[0];

    for (let i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i];
        }
    }
    return longestWord;
}

// Problem 3: Remove duplicates from an array
function removeDuplicates(arr) {
    const uniqueValues = new Set(arr);
    return [...uniqueValues];
}

// Problem 4: Checks if input is a Palindrome
function isPalindrome(input)
{
    const normalizedInput = input.toLowerCase().replace(/[^\w]|_/g, "");
    const reversedInput = normalizedInput.split('').reverse().join('');
    return normalizedInput === reversedInput;
}

// Problem 5: FizzBuzz 
function fizzBuzz(n)
{
    const array = [];
    for(let i = 1; i <= n; i++)
    {
        if(i % 15 === 0) array.push("FizzBuzz");
        else if(i % 3 === 0) array.push("Fizz");
        else if(i % 5 === 0) array.push("Buzz");
        else array.push(i);
    }

    return array;
}

// =================== TEST RUNNER ===================

function runTests() {
    console.log("=== Reverse String ===");
    console.log(reverseString("Reverse") === "esreveR");

    console.log("=== Longest Word ===");
    console.log(
        findLongestWord("Finding the longest word in this sentence.") === "sentence"
    );

    console.log("=== Remove Duplicates ===");
    const result = removeDuplicates([0, 1, 2, 2, 3]);
    console.log(result.length === 4);

    console.log("=== Check Palindrome ===");
    console.log(isPalindrome("A man, a plan, a canal – Panama") === true);
    console.log(isPalindrome("it's not a = palindrome.") === false);

    console.log("=== FizzBuzz ===");
    const fb = fizzBuzz(15);
    console.log(fb[2] === "Fizz");       // 3
    console.log(fb[4] === "Buzz");       // 5
    console.log(fb[14] === "FizzBuzz");  // 15

}

runTests();