//Because random was not random enough

let lastNumber

function getRandNumber(x) {
    var r = Math.floor((Math.random() * x));

    if (r === lastNumber) {
        return getRandNumber(x)
    }
    return r
}


exports.RealRandom = function(x) {
    const number = getRandNumber(x)
    lastNumber = number
    return number
}
