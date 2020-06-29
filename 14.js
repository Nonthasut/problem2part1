let n = prompt("Add n for factory")
let result = 1;
let sum = 0;

function answer(n) {

    for (i = 1; i <= n; i++) {
        result *= i
        result += ""
    }
    result = result.split("")
    for (j = 0; j <= result.length; j++) {
        sum += Number(result.slice(j, j + 1))
    }

    return (sum)
} answer(n)