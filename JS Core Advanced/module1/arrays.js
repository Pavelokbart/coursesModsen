function sumFirstHalf(arr) {
    let sum = 0;
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        sum += arr[i];
    }
    return sum;
}
