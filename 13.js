let number = prompt("Add number")
number += ""
let result = 0;
for (i = 0; i <= number.length - 1; i++) {
    result += Number(number.slice(i, i + 1))
} alert(result)