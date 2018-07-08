const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let starPatterns = []

const calcPatterns = stars => {
    let topRow = Math.ceil(parseFloat(stars) / 2.0)
    while(topRow !== 1){
        let dubMinusOne = topRow * 2 - 1
        if(stars % topRow === 0)
            starPatterns.push(`${topRow},${topRow}`)
        if(stars % dubMinusOne === topRow || stars % dubMinusOne === 0)
            starPatterns.push(`${topRow},${topRow - 1}`)
        topRow--
    }
}

const print = stars => {
    starPatterns.reverse()
    console.log(`${stars}:`)
    starPatterns.forEach(pattern => {
        console.log(pattern)
    })
}

rl.on('line', input => {
    const stars = parseInt(input,10)
    calcPatterns(stars)
    print(stars)
    rl.close()
})