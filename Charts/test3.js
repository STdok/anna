var data = []




function genData() {
    var res = []
    for (i = 1; i <= 6; i++) {



        let result = []
        let result2 = []
        for (j = 1; j <= 6; j++) {
            let number = Math.floor(Math.random() * 100)
            result.push(number)

        }

        let sum = 0
        result.forEach(item => { sum = sum + item })
        console.log(sum)
        result.forEach(item => {
            result2.push(Math.round(item / sum * 100))
        })
        let sum2 = 0

        result2.forEach(item => { sum2 = sum2 + item })
        console.log(sum2)
        res.push(result2)


    }



    return res

}


let genData2 = genData()

function transpose(data) {


    return data[0].map((_, colIndex) => data.map(row => row[colIndex]))
}

let genData3 = genData2[0].map((_, colIndex) => genData2.map(row => row[colIndex]));

console.log(genData2)
console.log(transpose(genData2))