function sortData(data, howTosort) {
    if (howTosort === true) {
        return data.sort((a, b) => {return a - b })
    } else if (howTosort === false) {
        return data.sort((a, b) => {return b - a })
    }
} sortData([3, 5, 4, 1, 2], true)