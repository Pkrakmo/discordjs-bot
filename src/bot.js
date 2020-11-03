// RUN: npm run start
require('dotenv').config();

const { Client } = require('discord.js')
const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
});

client.on('message', (message) => 
{
    //ignores the bot
    if (message.author.bot) return;

    var correctTime = 
    [`Indeed it is, ${message.author.username}`, 
    'https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif', 
    'https://media.giphy.com/media/236NoPWibFgVi8lBgi/giphy.gif'];

    var lateTime = 
    ['https://media.giphy.com/media/lgIyvBoSKEhuo/giphy.gif', 
    `You're a bit too late, ${message.author.username}`,
    "You're a bit too late",
    "This is not the time you are looking for",
    'https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif',
    `Try again tomorrow, ${message.author.username}`];

    var earlyTime = [`Bit to early there, ${message.author.username} ?`, 
    `Ladies and gentlemen, the fastest shooter in the west: ${message.author.username}`, 
    "This is not the time you are looking for", 
    "Please try again later", 
    "You're a bit too early ", 
    'https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif'];
    
    var today = new Date();
    var time = `${today.getHours()}${today.getMinutes()}`;
    var theAnswer = '13:37'
    var helper = theAnswer.replace(':', '');

    if (message.content === theAnswer){
        if (parseFloat(time)  === parseFloat(helper) ){
            var random = Math.floor(Math.random() * correctTime.length)
            message.channel.send(correctTime[random])

        }

        else if ( parseFloat(time)  > parseFloat(helper) ){
            var random = Math.floor(Math.random() * lateTime.length)
            message.channel.send(lateTime[random])

        }

        else if (parseFloat(time)  <  parseFloat(helper) ){
            var random = Math.floor(Math.random() * earlyTime.length)
            message.channel.send(earlyTime[random])
        }      
    };

});

client.login(process.env.TESTDISCORDJS_BOT_TOKEN)
