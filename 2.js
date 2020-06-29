let n = prompt("Add n")
let result = [2, 3, 5, 7];
for (i = 2; i <= n; i++) {
    if (n <= 2) {
        result = [2]
        break;
    }
    else if (n <= 3) {
        result = [2, 3]
        break;
    }
    else if (n <= 5) {
        result = [2, 3, 5]
        break;
    }
    else if (n > 10 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {

        result.push(i)
    } else {
        continue;
    }
} alert(result)
