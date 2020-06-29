let n = Number(prompt("Add n"))
let result = [2, 3, 5, 7];
for (i = 0; i <= Infinity; i++) {
    if (n == 1) {
        result = [2]
        break;
    }
    else if (n == 2) {
        result = [2, 3]
        break;
    }
    else if (n == 3) {
        result = [2, 3, 5]
        break;
    }  else if (n == 4) {
        break;
    }
    else if (n > 4&&i!=1 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 ) {
        if (result.length != n) {
            result.push(i)
        }else if(result.length=n){
            break
        }

    } else {
        continue;
    }
} alert(result)
