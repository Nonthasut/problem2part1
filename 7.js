function GCD(number) {
    let collectData = []
    let prove = []
    let answer = []

    number.sort((a, b) => { return a - b })

    for (i = 0; i <= number.length - 1; i++) {
        for (j = 1; j <= number[number.length - 1]; j++) {
            collectData.push([number[i], j])
        }
    }

    for (k = 0; k <= collectData.length - 1; k++) {
        if (collectData[k][0] % collectData[k][1] == 0) {
            prove.push(collectData[k][1])
        }
    }
    prove.sort((a, b) => { return a - b })

    for (m = 0; m <= prove.length - 1; m++) {
        if (prove[m] == prove[m+(number.length-1)]) {
            answer.push(prove[m])
            prove.slice(0,number.length)
        }
    }

    answer.sort((a, b) => { return a - b })


    return answer[answer.length-1]
} GCD([6,8,16])