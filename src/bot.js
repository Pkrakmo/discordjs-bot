require('dotenv').config();
var td = require('./commands/today.js')
var dg = require('./commands/debug.js')
var lt = require('./commands/leet.js')
var rr = require('./tools/realRandom.js')
var tm = require('./tools/time.js')

const {
    Client
} = require('discord.js')
const client = new Client();
const PREFIX = "!"

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in ${tm.time('hhmmss')}`)
});

client.on('message', (message) => {
    //ignores the bot
    if (message.author.bot) return;

    const theAnswer = '13:37'
    var altAnswer = theAnswer.replace(':', '');

    if (message.content == theAnswer || message.content == altAnswer) {
        if (tm.time('hhmm') == altAnswer) {
            message.channel.send(`${lt.leet(message.member.displayName, 'correct')} `)
        } else if (tm.time('hhmm') < altAnswer) {
            message.channel.send(`${lt.leet(message.member.displayName, 'early')} `)
        } else if (tm.time('hhmm') > altAnswer) {
            message.channel.send(`${lt.leet(message.member.displayName, 'late')} `)
        }

    };

    var reactArray = ['🇫', `${message.guild.emojis.cache.get('779262760831811584')}`]

    if (message.content == tm.time('hhmm')) {
        if (parseFloat(message.content) > 1337 && parseFloat(message.content) < 1700) {
            try {
                message.react(reactArray[rr.RealRandom(reactArray.length)])
            } catch (err) {
                console.log("No access to that emoji ID, probably, moving on")
                return
            }
        }
    };

    const commands = ["commands", "today", "ayaya", "welcome"]

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
            message.channel.send(`${td.Today()} `)
        }

        if (CMD_NAME === 'welcome') {
            message.channel.send(`https://tenor.com/view/hello-welcome-dr-evil-come-gif-17033528`)
        }

        if (CMD_NAME === 'debug') {
            console.log(`${tm.time('hh:mm:ss')} ${message.author.username} tried to debug something, lol`)
            //console.log(`${tm.time('hhmmss')}`)
            message.channel.send(`${dg.Debug()} `)
            //message.channel.send(`${dg.Debug(message.member.displayName, 'correct')} `)
            //message.channel.send(`Resistance is futile, ${message.author.username}. You will be assimilated`)
            //message.channel.send(`Resistance is futile, ${message.member.displayName}. You will be assimilated`)
            //message.reply(`resistance is futile. You will be assimilated`)
            //message.react(message.guild.emojis.cache.get('301131285840003076'))   // 779262760831811584
        }
    };
});

client.login(process.env.TESTDISCORDJS_BOT_TOKEN)