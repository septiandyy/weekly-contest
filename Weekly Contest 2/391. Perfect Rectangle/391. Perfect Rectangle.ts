function isRectangleCover(rectangles: number[][]): boolean {
    const pointSet: Set<string> = new Set();
    let totalArea = 0;

    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    // Helper function to create a string for a point
    const pointToString = (x: number, y: number): string => `${x},${y}`;

    for (const [xi, yi, ai, bi] of rectangles) {
        // Calculate the total area of all rectangles
        totalArea += (ai - xi) * (bi - yi);

        // Update the bounding box
        minX = Math.min(minX, xi);
        minY = Math.min(minY, yi);
        maxX = Math.max(maxX, ai);
        maxY = Math.max(maxY, bi);

        // Add or remove corners
        const corners = [
            pointToString(xi, yi),    // bottom-left
            pointToString(xi, bi),    // top-left
            pointToString(ai, yi),    // bottom-right
            pointToString(ai, bi)     // top-right
        ];

        for (const corner of corners) {
            if (pointSet.has(corner)) {
                pointSet.delete(corner); // Remove if it appears again (cancel out)
            } else {
                pointSet.add(corner);    // Add if it's the first time appearing
            }
        }
    }

    // The expected area of the bounding rectangle
    const boundingArea = (maxX - minX) * (maxY - minY);

    // Check if the total area of all rectangles matches the bounding rectangle's area
    if (totalArea !== boundingArea) return false;

    // Check that only the 4 corners of the bounding rectangle are left
    const expectedCorners = new Set([
        pointToString(minX, minY),  // bottom-left
        pointToString(minX, maxY),  // top-left
        pointToString(maxX, minY),  // bottom-right
        pointToString(maxX, maxY)   // top-right
    ]);

    return pointSet.size === 4 && [...pointSet].every(corner => expectedCorners.has(corner));
}

// Example usage:

// Test case 1: Perfect cover
const rectangles1 = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]];
console.log(isRectangleCover(rectangles1)); // Output: true

// Test case 2: Gap between rectangles
const rectangles2 = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]];
console.log(isRectangleCover(rectangles2)); // Output: false

// Test case 3: Overlapping rectangles
const rectangles3 = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]];
console.log(isRectangleCover(rectangles3)); // Output: false