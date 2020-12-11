const realRandom = require('../tools/realRandom.js')
const todayData = require('../configs/today.json')

module.exports = function() {
    switch (new Date().getDay()) {
        case 0: // Sunday
            return todayData.sunday[realRandom(todayData.sunday.length)]
        case 1: // Monday
            return todayData.monday[realRandom(todayData.monday.length)]
        case 2: // Tuesday
            return todayData.tuesday[realRandom(todayData.tuesday.length)]
        case 3: // Wednesday
            return todayData.wednesday[realRandom(todayData.wednesday.length)]
        case 4: // Thursday
            return todayData.thursday[realRandom(todayData.thursday.length)]
        case 5: // Friday
            return todayData.friday[realRandom(todayData.friday.length)]
        case 6: // Saturday
            return todayData.saturday[realRandom(todayData.saturday.length)]
    }
}