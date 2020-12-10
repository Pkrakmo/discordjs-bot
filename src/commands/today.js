var rr = require('../tools/realRandom.js')

const monday = [
    `https://media.giphy.com/media/UYBXiQpLs0UsU/giphy.gif`,
    `https://media.giphy.com/media/2Qicax4YztZAc/giphy.gif`,
    `https://tenor.com/view/monday-olan-rogers-its-amonday-gif-13736411`
]

const tuesday = [
    `https://media0.giphy.com/media/3o6ozsIxg5legYvggo/source.gif`,
    `https://tenor.com/view/disco-tuesday-dog-walk-walking-trick-gif-12255646`,
    `https://media.giphy.com/media/idkWREpGm89wwwwAES/giphy.gif`,
    `https://media.giphy.com/media/1xoYVYCnezWcr2dImP/giphy.gif`,
    `https://media.giphy.com/media/5tsjxsQXLl4GcNsd5S/giphy.gif`
]

const wednesday = [
    `https://www.youtube.com/watch?v=du-TY1GUFGk`,
    `https://www.youtube.com/watch?v=csqJK8wwaHw`,
    `https://www.youtube.com/watch?v=PAnKl7862qc`,
    `https://www.youtube.com/watch?v=PE8GlPpuLuY`,
    `https://www.youtube.com/watch?v=YSDAAh6Lps4`,
    `https://www.youtube.com/watch?v=aew9WTLqjDc`,
    `https://www.youtube.com/watch?v=IR0QUwGmo4A`,
    `https://www.youtube.com/watch?v=Oct2xKMGOno`,
    `https://www.youtube.com/watch?v=m2Z0CyuyfMI`,
    `https://www.youtube.com/watch?v=d-RbOVJNtBs`,
    `https://giphy.com/gifs/christina-ricci-addams-family-j8ZmmhNLec7XW`,
    `https://tenor.com/bmkPv.gif`
]

const thursday = [
    'https://media.giphy.com/media/82rEYzUgZbgQM/giphy.gif',
    'https://media.giphy.com/media/jIheCA9EeB5lLauHTT/giphy.gif',
    'https://media.giphy.com/media/ce280BjADCmsfgps4t/giphy.gif',
    'https://tenor.com/view/man-thursday-feel-dancing-excited-gif-11658563'

]

const friday = [
    'https://www.youtube.com/watch?v=kfVsfOSbJY0',
    'https://www.youtube.com/watch?v=kfVsfOSbJY0'
]

const saturday = [
    'https://media.giphy.com/media/FLo0LIBIUeI6c/giphy.gif',
    'https://media.giphy.com/media/FLo0LIBIUeI6c/giphy.gif'
]

const sunday = [
    'https://media.giphy.com/media/FLo0LIBIUeI6c/giphy.gif',
    'https://media.giphy.com/media/FLo0LIBIUeI6c/giphy.gif'
]

exports.Today = function() {
    switch (new Date().getDay()) {
        case 0: // Sunday
            return (sunday[rr.RealRandom(sunday.length)])
        case 1: // Monday
            return (monday[rr.RealRandom(monday.length)])
        case 2: // Tuesday
            return (tuesday[rr.RealRandom(tuesday.length)])
        case 3: // Wednesday
            return (wednesday[rr.RealRandom(wednesday.length)])
        case 4: // Thursday
            return (thursday[rr.RealRandom(thursday.length)])
        case 5: // Friday
            return (friday[rr.RealRandom(friday.length)])
        case 6: // Saturday
            return (saturday[rr.RealRandom(saturday.length)])
    }
}