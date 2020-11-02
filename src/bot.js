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

    var correctTime = ["Indeed it is", 'https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif', 'https://media.giphy.com/media/236NoPWibFgVi8lBgi/giphy.gif'];
    var lateTime = ['https://media.giphy.com/media/lgIyvBoSKEhuo/giphy.gif', "Please try again later", "You're a bit too late"];
    var earlyTime = ["Bit to early there, Buckaroo ?", "Fastes shooter in the west, eh ?", "This is not the time you are looking for", "Please try again later", "You're a bit too early ", 'https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif'];
    
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var theAnswer = '13:37'

    if (message.content === theAnswer){
        if (time === theAnswer){
            var random = Math.floor(Math.random() * correctTime.length)
            message.channel.send(correctTime[random])
        }
        else if (time > theAnswer){
            var random = Math.floor(Math.random() * lateTime.length)
            message.channel.send(lateTime[random])
        }
        else if (time < theAnswer){
            var random = Math.floor(Math.random() * earlyTime.length)
            message.channel.send(earlyTime[random])
        }      
    }

});

client.login(process.env.DISCORDJS_BOT_TOKEN)
