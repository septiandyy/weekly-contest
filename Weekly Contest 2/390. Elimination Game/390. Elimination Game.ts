function lastRemaining(n: number): number {
    let start = 1;  // First element in the list
    let step = 1;   // Step size between elements
    let leftToRight = true;  // Direction flag
    let remaining = n;  // Number of elements remaining

    while (remaining > 1) {
        // Remove elements based on the current direction
        if (leftToRight || remaining % 2 === 1) {
            start += step;  // Update the starting element
        }
        // Update for the next round
        remaining = Math.floor(remaining / 2);
        step *= 2;
        leftToRight = !leftToRight;  // Alternate the direction
    }

    return start;
}

// Example usage:

// Test case 1
const n1 = 9;
console.log(`Last remaining number for n = ${n1} is: ${lastRemaining(n1)}`); // Output: 6

// Test case 2
const n2 = 1;
console.log(`Last remaining number for n = ${n2} is: ${lastRemaining(n2)}`); // Output: 1