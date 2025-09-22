function solution(A) {
    const N = A.length;
    const minAllowedValueForN = 1;
    const maxAllowedValueForN = 1000000;
    const pairedValues = [];
    let oddOneOut = null;

    if (!Array.isArray(A)) {
        console.error(`Error: Input A must be an array. Received: ${A}`);
        return [];
    }

    if (N < minAllowedValueForN || N > maxAllowedValueForN) {
        console.error(
            `${N} must be between ${minAllowedValueForN} and ${maxAllowedValueForN}.`
        );
        return null;
    }

    for (let i = A.length - 1; i >= 0; i--) {
        const currentNum = A[i];

        for (let j = i - 1; j >= 0; j--) {
            const potentialMatch = A[j];

            if (currentNum === potentialMatch) {
                pairedValues.push(currentNum, potentialMatch);

                A.splice(i, 1);
                A.splice(j, 1);
                i = A.length;
                break;
            }
        }
    }

    if (A.length === 1) {
        oddOneOut = A[0];
    } else if (A.length > 1) {
        console.error("Error: More than one unpaired value found in array.");
    }

    return oddOneOut;
}

let testArr = [9, 3, 9, 3, 9, 7, 9];
console.log("Original array:", testArr);
let result = solution(testArr);
console.log("Odd one out:", result);
