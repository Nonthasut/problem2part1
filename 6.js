let sum = 0
for (i = 1; i <= 5; i++) {
    if (i == 2 && i == 3 && i == 5 && i == 7) { sum -= i }
    else if (i != 1  && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
        sum -= i
    } else if(i == 1  || i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0  &&i != 2 && i != 3 && i != 5 && i != 7) {
        sum += i
    }
} alert(sum)