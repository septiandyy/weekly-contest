function findTheDifference(s: string, t: string): string {
    let result = 0;

    // XOR all characters in string s
    for (let i = 0; i < s.length; i++) {
        result ^= s.charCodeAt(i);
    }

    // XOR all characters in string t
    for (let i = 0; i < t.length; i++) {
        result ^= t.charCodeAt(i);
    }

    // The remaining value is the added character
    return String.fromCharCode(result);
}

// Example usage:

// Test case 1
const s1 = "abcd";
const t1 = "abcde";
console.log(`The added character is: ${findTheDifference(s1, t1)}`); // Output: e

// Test case 2
const s2 = "";
const t2 = "y";
console.log(`The added character is: ${findTheDifference(s2, t2)}`); // Output: y