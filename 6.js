let n = +prompt('Add n')
let counter = [1]
let checker = 0
for (i = 2; i <= n; i++) {
    for (j = 0; j <= n; j++) {
        if (i % j == 0) {
            checker++
        }
    }
    if (checker < 3) {
        counter.push(i * -1)
        checker = 0
    } else if (checker > 2) {
        counter.push(i)
        checker = 0
    } else if (counter.length == n) {
        break
    }
} alert(counter.reduce((sum, data) => { return sum + data }))