/**
 * Rotates an array A to the right K times.
 * Elements that move off the end reappear at the beginning.
 *
 * @param {number[]} A The array of integers to rotate.
 * @param {number} K The number of times to rotate the array to the right.
 * @returns {number[]} The rotated array.
 */
function solution(A, K) {
    const MIN_ARRAY_LENGTH = 0;
    const MAX_ARRAY_LENGTH = 100;

    const MIN_K_VALUE = 0;
    const MAX_K_VALUE = 100;

    if (!Array.isArray(A)) {
        console.error(`Error: Input A must be an array. Received: ${A}`);
        return [];
    }

    if (A.length < MIN_ARRAY_LENGTH || A.length > MAX_ARRAY_LENGTH) {
        console.error(`Error: Array A length (${A.length}) must be between ${MIN_ARRAY_LENGTH} and ${MAX_ARRAY_LENGTH}.`);
        return A;
    }

    if (!Number.isInteger(K) || K < MIN_K_VALUE || K > MAX_K_VALUE) {
        console.error(`Error: K must be an integer between ${MIN_K_VALUE} and ${MAX_K_VALUE}. Received: ${K}`);
        return A;
    }

    if (A.length === 0 || K === 0) {
        return A;
    }

    console.log("pre-rotated A:", A);

    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
    console.log("rotated A:", A);

    return A;
}

console.log("\ntesting valid rotations..");
solution([1, 2, 3, 4], 1);    // K = 1
solution([1, 2, 3, 4], 2);    // K = 2
solution([1, 2, 3, 4], 4);    // K = 4 (should return original array)
solution([1, 2, 3, 4], 5);    // K = 5 (same as K=1)
solution([3, 8, 9, 7, 6], 3); // Example from Codility
solution([], 5);              // Empty array
solution([100], 10);          // Single element array

console.log("\ntesting valid inputs...");
solution("not an array", 1);
solution([1, 2], "not a number");
solution([1, 2], -1); // K out of range