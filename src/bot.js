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

    var correctTime = ["Indeed it is", "On time !", "Hello there", "Bingo"];
    var lateTime = ["Slowpoke.png", "Please try again later"];
    var earlyTime = ["Bit to early there, Buckaroo ?", "Fastes shooter in the west, eh ?", "This is not the time you are looking for", "Please try again later", "You're a bit too early "];
    
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var theAnswer = '13:37'

    if (message.content === theAnswer){
        if (time === theAnswer){
            var randomCorrect = Math.floor(Math.random() * correctTime.length)
            message.channel.send(correctTime[randomCorrect])
        }
        else if (time > theAnswer){
            var randomLate = Math.floor(Math.random() * lateTime.length)
            message.channel.send(lateTime[randomLate])
        }
        else if (time < theAnswer){
            var randomEarly = Math.floor(Math.random() * earlyTime.length)
            message.channel.send(earlyTime[randomEarly])
        }      
    }

});

client.login(process.env.DISCORDJS_BOT_TOKEN)
