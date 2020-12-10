var rr = require('../tools/realRandom.js')
var tm = require('../tools/time.js')

exports.leet = function(name, state) {

    var early = [
        `Bit to early there ${name}?`,
        `Ladies and gentlemen the fastest shooter in the west: ${name}`,
        "This is not the time you are looking for",
        "Please try again later",
        "You're a bit too early "
    ];


    var correct = [
        'https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif',
        'https://media.giphy.com/media/8xgqLTTgWqHWU/giphy.gif',
        'https://media.giphy.com/media/MM0Jrc8BHKx3y/giphy.gif',
        'https://media.giphy.com/media/1fm26vA3UsC8yzuiqC/giphy.gif',
        'https://media.giphy.com/media/iP8P6sbQTrmMM/giphy.gif',
        'https://media.giphy.com/media/bC0caT4xYU8qQ/giphy.gif',
        'https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif',
        'https://media.giphy.com/media/nqi89GMgyT3va/giphy.gif',
        'https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif',
        'https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif',
        'https://media.giphy.com/media/236NoPWibFgVi8lBgi/giphy.gif'
    ];

    var late = [
        `You're a bit too late ${name}`,
        "This is not the time you are looking for",
        'https://i.imgflip.com/4kvu43.jpg',
        `13:37 ? But it's ${tm.time('hh:mm')} :eyes:`,
        `:man_shrugging:`,
        `Try again tomorrow ${name}`
    ];

    console.log(`State "${state}" was triggered by ${name} at ${tm.time('hh:mm:ss')}`)

    switch (state) {
        case 'early':
            return (early[rr.RealRandom(early.length)])
        case 'correct':
            return (correct[rr.RealRandom(correct.length)])
        case 'late':
            return (late[rr.RealRandom(late.length)]);
        default:
            console.log(`State was not set, was triggered by ${name} at ${tm.time('hh:mm:ss')}`)
            return `Well, this is akward 🤷‍♂️`
    }

}