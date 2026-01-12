// Problem 1: Reverse a string (no .reverse())
function reverseString(str) {
    let reversedString = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        reversedString += str[i];
    }
    console.log("Original string: " + str);
    console.log("Reversed String: " + reversedString);
}

// Problem 2: Find the longest word in a sentence
function longestWord(sentence) {
    const wordArray = sentence.split(" ");
    let longestWord = wordArray[0];
    for(let i = 1; i < wordArray.length; i++)
    {
        if(wordArray[i].length > longestWord.length)
        {
            longestWord = wordArray[i];
        }
    }
    console.log("Longest word in a sentence is: " + longestWord);
}

// Problem 3: Remove duplicates from an array
function removeDuplicates(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(!newArray.includes(arr[i]))
        {
            newArray.push(arr[i]);
        }
    }
    console.log("Original Array: " + arr);
    console.log("New Array: " + newArray);
}


reverseString("Reverse");
longestWord("Finding the longest word in this sentence.");
removeDuplicates([0, 1, 2, 3, 4, 5, 6, 7, 8, 2, 9]);