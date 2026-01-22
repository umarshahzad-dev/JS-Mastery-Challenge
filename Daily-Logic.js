// Problem 1: Reverse a string (no .reverse())
function reverseString(str) {
    if (!str) return "";
    let reversedString = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        reversedString += str[i];
    }
    return reversedString;
}

// Problem 2: Find the longest word in a sentence
function findLongestWord(sentence) {
    const wordArray = sentence.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").split(" ");
    let longestWord = wordArray[0];
    for(let i = 1; i < wordArray.length; i++)
    {
        if(wordArray[i].length > longestWord.length)
        {
            longestWord = wordArray[i];
        }
    }
    return longestWord;
}

// Problem 3: Remove duplicates from an array
function removeDuplicates(arr) {
    const noDuplicate = new Set(arr);

    return [...noDuplicate];
}


const originalString = "Reverse";
const reversedString = reverseString(originalString);

console.log("Original String: " , originalString);
console.log("Reversed String: " , reversedString);

const sentence = "Finding the longest word in this sentence.";
const longestWord = findLongestWord(sentence);
console.log("Longest word in a sentence is: " , longestWord);

const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 2, 9];
const noDuplicate = removeDuplicates(originalArray);

console.log("Original Array: " , originalArray);
console.log("Removed Duplicates: " , noDuplicate);