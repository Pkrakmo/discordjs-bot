const realRandom = require('../tools/realRandom.js')
const time = require('../tools/time.js')
const todayData = require('../configs/today.json')

module.exports = function() {
return todayData.wednesday[realRandom(todayData.wednesday.length)]
}
