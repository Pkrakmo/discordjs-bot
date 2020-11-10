// RUN: npm run start
require('dotenv').config();

const { Client } = require('discord.js')
const client = new Client();
const PREFIX = "!"

function getDay(){

}

function getTime(){
    var today = new Date();
    var time = today.toLocaleTimeString('no-NB', { hour12: false });

    return time
}

function getTimeNum(){
    var today = new Date();
    var time = today.toLocaleTimeString('no-NB', { hour12: false });
    var timeNum = parseFloat(time.slice(0, 5).replace(':', ''));

    return timeNum
}

client.on('ready',  () => {
    console.log(`${client.user.tag} has logged in ${getTime()}`)
});

client.on('message', (message) => 
{
    //ignores the bot
    if (message.author.bot) return;

    var correctTime = 
    [
    `Indeed it is, ${message.member.displayName}`, 
    'https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif',
    'https://youtu.be/-YCN-a0NsNk',
    'https://www.youtube.com/watch?v=69AyYUJUBTg',
    'https://media.giphy.com/media/8xgqLTTgWqHWU/giphy.gif',
    'https://media.giphy.com/media/236NoPWibFgVi8lBgi/giphy.gif'
    ];

    var lateTime = 
    [
    `You're a bit too late, ${message.member.displayName}`,
    "You're a bit too late",
    "This is not the time you are looking for",
    'https://i.imgflip.com/4kvu43.jpg',
    `13:37 ? But it's ${getTime()} :eyes:`,
    `:man_shrugging:`,
    `Try again tomorrow, ${message.member.displayName}`
    ];

    var earlyTime = 
    [
    `Bit to early there, ${message.member.displayName} ?`, 
    `Ladies and gentlemen, the fastest shooter in the west: ${message.member.displayName}`, 
    "This is not the time you are looking for", 
    "Please try again later",
    "You're a bit too early "
    ];

    var theAnswer = '13:37'
    var helper = theAnswer.replace(':', '');
    var helpernum = parseFloat(helper)

    if (message.content === theAnswer || message.content === helper){



        if (getTimeNum()  === helpernum ){
            var random = Math.floor(Math.random() * correctTime.length)
            message.channel.send(correctTime[random])
            console.log(`correctTime answer was triggered @ ${getTime()} with timeNum ${getTimeNum()} by ${message.member.displayName}`)
        }

        else if (getTimeNum() <  helpernum){
            var random = Math.floor(Math.random() * earlyTime.length)
            message.channel.send(earlyTime[random])
            console.log(`earlyTime answer was triggered @ ${getTime()} with timeNum ${getTimeNum()} by ${message.member.displayName}`)
        }  

        else if (getTimeNum() > helpernum ){
            var random = Math.floor(Math.random() * lateTime.length)
            message.channel.send(lateTime[random])
            console.log(`lateTime answer was triggered @ ${getTime()} with timeNum ${getTimeNum()} by ${message.member.displayName}`)
        }

    
    };

    const commands = ["commands", "today", "ayaya"]

    if (message.content.startsWith(PREFIX)){
        if (message.author.bot) return;
        const [CMD_NAME, ...args] = message.content
            .trim()
            .toLowerCase()
            .substring(PREFIX.length)
            .split((/\s+/))

            if (CMD_NAME === 'commands'){
            message.channel.send("Command list:")
            for (i = 0; i < commands.length; i++) {
                message.channel.send(`${PREFIX}${commands.sort()[i]}`);
            }}

            if (CMD_NAME === 'ayaya'){
                message.channel.send('https://youtu.be/9wnNW4HyDtg')
            }

            if (CMD_NAME === 'today'){
                switch (new Date().getDay()) {
                    case 0: // Sunday
                        message.channel.send(`Nothing was found, ${message.member.displayName}`)
                      break;
                    case 1: // Monday
                        message.channel.send(`Nothing was found, ${message.member.displayName}`)
                      break;
                    case 2: // Tuesday
                        message.channel.send(`Nothing was found, ${message.member.displayName}`)
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
                         `https://www.youtube.com/watch?v=d-RbOVJNtBs`]
                        var random = Math.floor(Math.random() * wednesday.length)
                        message.channel.send(wednesday[random])
                      break;
                    case 4: // Thursday
                        message.channel.send(`Nothing was found, ${message.member.displayName}`)
                      break;
                    case 5: // Friday
                        message.channel.send('https://youtu.be/4z95SAFud7w')
                      break;
                    case 6: // Saturday
                        message.channel.send(`Nothing was found, ${message.member.displayName}`)
                  }
            }
                
            if (CMD_NAME === 'debug'){
                console.log(`${getTime()} ${message.author.username} tried to debug something, lol`)
                // message.channel.send(`Resistance is futile, ${message.author.username}. You will be assimilated`)
                message.channel.send(`Resistance is futile, ${message.member.displayName}. You will be assimilated`)
                              
            }
            
        };
    });

client.login(process.env.TESTDISCORDJS_BOT_TOKEN)
