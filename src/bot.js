require('dotenv').config();

const {
    Client
} = require('discord.js')
const client = new Client();
const PREFIX = "!"

let lastNumber

function getRandNumber(x) {
    var r = Math.floor((Math.random() * x));

    if (r === lastNumber) {
        return getRandNumber(x)
    }
    return r
}

//Because random was not random enough
function realRandom(x) {
    const number = getRandNumber(x)
    lastNumber = number
    return number
}

function getTime() {
    var today = new Date();
    var time = today.toLocaleTimeString('no-NB', {
        hour12: false
    });

    return time
}

function getTimeNum() {
    var today = new Date();
    var time = today.toLocaleTimeString('no-NB', {
        hour12: false
    });
    var timeNum = parseFloat(time.slice(0, 5).replace(':', ''));

    return timeNum
}

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in ${getTime()}`)
});

client.on('message', (message) => {
    //ignores the bot
    if (message.author.bot) return;

    var correctTime = [
        `Indeed it is ${message.member.displayName}`,
        'https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif',
        'https://media.giphy.com/media/8xgqLTTgWqHWU/giphy.gif',
        'https://media.giphy.com/media/MM0Jrc8BHKx3y/giphy.gif',
        'https://media.giphy.com/media/1fm26vA3UsC8yzuiqC/giphy.gif',
        'https://media.giphy.com/media/iP8P6sbQTrmMM/giphy.gif',
        'https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif',
        'https://media.giphy.com/media/nqi89GMgyT3va/giphy.gif',
        'https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif',
        'https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif',
        'https://media.giphy.com/media/h26R1JMxiqYpwp0rkF/giphy.gif',
        'https://media.giphy.com/media/10tbKyKsjdrOzC/giphy.gif',
        'https://media.giphy.com/media/oBPOP48aQpIxq/giphy.gif',
        'https://media.giphy.com/media/8xSnw21AM7OQo/giphy.gif',
        'https://media.giphy.com/media/S1Ap7GTcjToZy/giphy.gif',
        'https://media.giphy.com/media/nLH7f5K1Tb1sY/giphy.gif',
        'https://media.giphy.com/media/3M9CR4S2KFNyOIqHGg/giphy.gif',
        'https://media.giphy.com/media/236NoPWibFgVi8lBgi/giphy.gif'
        
    ];

    var lateTime = [
        `You're a bit too late ${message.member.displayName}`,
        "This is not the time you are looking for",
        'https://i.imgflip.com/4kvu43.jpg',
        `13:37 ? But it's ${getTime()} :eyes:`,
        `:man_shrugging:`,
        `Try again tomorrow ${message.member.displayName}`
    ];

    var earlyTime = [
        `Bit to early there ${message.member.displayName} ?`,
        `Ladies and gentlemen the fastest shooter in the west: ${message.member.displayName}`,
        "This is not the time you are looking for",
        "Please try again later",
        "You're a bit too early "
    ];

    var theAnswer = '13:37'
    var helper = theAnswer.replace(':', '');
    var helpernum = parseFloat(helper)

    if (message.content === theAnswer || message.content === helper) {
        if (getTimeNum() === helpernum) {
            message.channel.send(correctTime[realRandom(correctTime.length)])
            console.log(`correctTime answer was triggered @ ${getTime()} with timeNum ${getTimeNum()} by ${message.member.displayName}`)
        } else if (getTimeNum() < helpernum) {
            message.channel.send(earlyTime[realRandom(earlyTime.length)])
            console.log(`earlyTime answer was triggered @ ${getTime()} with timeNum ${getTimeNum()} by ${message.member.displayName}`)
        } else if (getTimeNum() > helpernum) {
            message.channel.send(lateTime[realRandom(lateTime.length)])
            console.log(`lateTime answer was triggered @ ${getTime()} with timeNum ${getTimeNum()} by ${message.member.displayName}`)
        }



    };

    var altAnswer = '13:38'
    var altHelper = altAnswer.replace(':', '');

    if (message.content === altHelper || message.content === altAnswer) {
        try {
            message.react(message.guild.emojis.cache.get('779262760831811584'))
        } catch (err) {
            console.log("No access to that emoji ID, probably, moving on")
            return
        }
    };

// Bugged AF
    var reactArray = ['🇫', `${message.guild.emojis.cache.get('779262760831811584')}`]

    if (parseFloat(message.content) > 1338 && parseFloat(message.content) < 1600) {
        try {
            message.react(reactArray[realRandom(reactArray.length)])
        } catch (err) {
            console.log("No access to that emoji ID, probably, moving on")
            return
        }
    };
    

    const commands = ["commands", "today", "ayaya"]

    if (message.content.startsWith(PREFIX)) {
        if (message.author.bot) return;
        const [CMD_NAME, ...args] = message.content
            .trim()
            .toLowerCase()
            .substring(PREFIX.length)
            .split((/\s+/))

        if (CMD_NAME === 'commands') {
            message.channel.send("Command list:")
            for (i = 0; i < commands.length; i++) {
                message.channel.send(`${PREFIX}${commands.sort()[i]}`);
            }
        }

        if (CMD_NAME === 'ayaya') {
            message.channel.send('https://youtu.be/9wnNW4HyDtg')
        }

        if (CMD_NAME === 'today') {
            switch (new Date().getDay()) {
                case 0: // Sunday
                    message.channel.send(`https://media.giphy.com/media/FLo0LIBIUeI6c/giphy.gif`)
                    break;
                case 1: // Monday
                    let monday = [
                        `https://media.giphy.com/media/UYBXiQpLs0UsU/giphy.gif`,
                        `https://media.giphy.com/media/2Qicax4YztZAc/giphy.gif`,
                        `https://tenor.com/view/monday-olan-rogers-its-amonday-gif-13736411`
                    ]
                    message.channel.send(monday[realRandom(monday.length)])
                    break;
                case 2: // Tuesday
                    let tuesday = [
                        `https://media0.giphy.com/media/3o6ozsIxg5legYvggo/source.gif`,
                        `https://tenor.com/view/disco-tuesday-dog-walk-walking-trick-gif-12255646`,
                        `https://media.giphy.com/media/idkWREpGm89wwwwAES/giphy.gif`,
                        `https://media.giphy.com/media/1xoYVYCnezWcr2dImP/giphy.gif`,
                        `https://media.giphy.com/media/5tsjxsQXLl4GcNsd5S/giphy.gif`
                    ]
                    message.channel.send(tuesday[realRandom(tuesday.length)])
                    break;
                case 3: // Wednesday
                    let wednesday = [
                        `https://www.youtube.com/watch?v=du-TY1GUFGk`,
                        `https://www.youtube.com/watch?v=csqJK8wwaHw`,
                        `https://www.youtube.com/watch?v=PAnKl7862qc`,
                        `https://www.youtube.com/watch?v=PE8GlPpuLuY`,
                        `https://www.youtube.com/watch?v=YSDAAh6Lps4`,
                        `https://www.youtube.com/watch?v=aew9WTLqjDc`,
                        `https://www.youtube.com/watch?v=IR0QUwGmo4A`,
                        `https://www.youtube.com/watch?v=Oct2xKMGOno`,
                        `https://www.youtube.com/watch?v=m2Z0CyuyfMI`,
                        `https://www.youtube.com/watch?v=d-RbOVJNtBs`
                    ]
                    message.channel.send(wednesday[realRandom(wednesday.length)])
                    break;
                case 4: // Thursday
                    let thursday = [
                        'https://media.giphy.com/media/82rEYzUgZbgQM/giphy.gif',
                        'https://media.giphy.com/media/jIheCA9EeB5lLauHTT/giphy.gif',
                        'https://media.giphy.com/media/ce280BjADCmsfgps4t/giphy.gif',
                        'https://tenor.com/view/man-thursday-feel-dancing-excited-gif-11658563'

                    ]
                    message.channel.send(thursday[realRandom(thursday.length)])
                    break;
                case 5: // Friday
                    message.channel.send('https://www.youtube.com/watch?v=kfVsfOSbJY0')
                    break;
                case 6: // Saturday
                    message.channel.send(`https://media.giphy.com/media/FLo0LIBIUeI6c/giphy.gif`)
            }
        }

        if (CMD_NAME === 'debug') {
            console.log(`${getTime()} ${message.author.username} tried to debug something, lol`)
            //message.channel.send(`Resistance is futile, ${message.author.username}. You will be assimilated`)
            //message.channel.send(`Resistance is futile, ${message.member.displayName}. You will be assimilated`)
            //message.reply(`resistance is futile. You will be assimilated`)
            // message.react(message.guild.emojis.cache.get('301131285840003076'))   // 779262760831811584
        }

    };
});

client.login(process.env.TESTDISCORDJS_BOT_TOKEN)