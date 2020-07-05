function LCM(number) {
    let collectData = []
    let answer = []

    number.sort((a, b) => { return a - b })

    while (number.length != 0) {

        let condition = number.every((data) => {
            return data % number[0] == 0
        })

        if (condition === true) {
            collectData.push(number[0])
            number =number.map((data) => {
                return data / number[0]
            })

        if (number[0] === 1) {
            number.shift()
        }

        } else if (condition === false) {
            collectData.push(number[0])
            number.shift()
        }
    }

    answer = collectData.reduce((total, data) => {
        return total * data
    })

    return answer
} LCM([24,48,96])