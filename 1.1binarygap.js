function solution(N) {
    const binary = N.toString(2);    
    const minAllowedValueForN = 1;
    const maxAllowedValueForN = 2147483647;
    let maxGap = 0;
    let currentGap = 0;
    let inGap = false;

    if (!Number.isInteger(N)) {
        console.error(`${N} must be an integer.`);
        return 0;
    }

    if (N < minAllowedValueForN || N > maxAllowedValueForN) {
        console.error(`${N} must be between ${minAllowedValueForN} and ${maxAllowedValueForN}.`);
        return 0;
    };

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '1') {
            if (inGap) {
                if (currentGap > maxGap) {
                    maxGap = currentGap;
                }
            }
            currentGap = 0;
            inGap = true;
        } else if (inGap) {
            currentGap++;
        }
    }
    return maxGap;
    

}

console.log(solution(17));
console.log(solution(267));
console.log(solution(1071));
console.log(solution(1));
console.log(solution(0));
console.log(solution(""));
console.log(solution("000"));
