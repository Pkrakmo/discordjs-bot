require('dotenv').config();
const today = require('./commands/today.js')
const debug = require('./commands/debug.js')
const leet = require('./commands/leet.js')
const realRandom = require('./tools/realRandom.js')
const time = require('./tools/time.js')

const {
    Client
} = require('discord.js')
const client = new Client();
const PREFIX = "!"

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in ${time('hh:mm:ss')}`)
});

client.on('message', (message) => {
    //ignores the bot
    if (message.author.bot) return;

    const theAnswer = '13:37'
    var altAnswer = theAnswer.replace(':', '');

    if (message.content == theAnswer || message.content == altAnswer) {
        if (time('hhmm') == altAnswer) {
            message.channel.send(`${leet(message.member.displayName, 'correct')} `)
        } else if (time('hhmm') < altAnswer) {
            message.channel.send(`${leet(message.member.displayName, 'early')} `)
        } else if (time('hhmm') > altAnswer) {
            message.channel.send(`${leet(message.member.displayName, 'late')} `)
        }

    };

    var reactArray = ['🇫', '⛔', '🙅‍♂️', `${message.guild.emojis.cache.get('779262760831811584')}`]

    if (message.content == time('hhmm')) {
        if (parseFloat(message.content) > 1337 && parseFloat(message.content) < 1700) {
            try {
                message.react(reactArray[realRandom(reactArray.length)])
            } catch (err) {
                console.log("No access to that emoji ID, probably, moving on")
                return
            }
        }
    };

    const commands = ["commands", "today", "ayaya", "welcome", "coin"]

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
            message.channel.send(`${today()} `)
        }

        if (CMD_NAME === 'coin') {
            coinArray = ["head", "Tail"]
            message.channel.send(`${coinArray[Math.floor((Math.random() * coinArray.length))]} `)
        }

        if (CMD_NAME === 'welcome') {
            message.channel.send(`https://tenor.com/view/hello-welcome-dr-evil-come-gif-17033528`)
        }

        if (CMD_NAME === 'debug') {
            console.log(`${time('hh:mm:ss')} ${message.author.username} tried to debug something, lol`)
            if (message.author.id == process.env.BOT_OWNER_ID){
                message.channel.send(`${debug('It works')} `)
            }
            else {
                message.channel.send(`But you are not my owner 🤖`)
            }
            
        }
    };
});

client.login(process.env.TESTDISCORDJS_BOT_TOKEN)