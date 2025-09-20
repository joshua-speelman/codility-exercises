function solution(A, K) {

    console.log("pre-rotated A:", A);

    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
    console.log("rotated A:", A);

    return A;
}

solution([1, 2, 3, 4], 2);