// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
]

// const sadReality = [
//     { result: "N/A" },
//     { result: "N/A" },
//     { result: "N/A" }
// ]

function superbowlWin(array) {
    const w = array.find(wins => wins.result === "W")
    if (w) {
        return w.year
    } else {
        return undefined
    }
}

function findWins(wins) {
    return wins.result === "W"
}
// function findYear(year) {
//     return year.year === "W"
// }
superbowlWin(record)