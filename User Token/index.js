// https://github.com/17teen
// Discord: 7teen#1464

const Discord = require('discord.js');
const client = new Discord.Client();
const { red, green, blue, yellow, cyan, greenBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const myID = settings.id;


client.on("ready", () => {
    console.log(``);
    console.log(``);
    console.log(greenBright(`                                      Logged in as: ${client.user.username}#${client.user.discriminator}`))
    console.log(greenBright(`                                      Prefix: ${prefix}`))
    console.log(``);
    console.log(``);
});

client.on("message", message => {

    if (message.author.id !== myID) {
        return;
    }

    if (message.content.startsWith(prefix + "tts")) {

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        setInterval(function(){
            message.channel.send(argresult, { tts: true });
        }, 1000) //1 Second(s) | lower this number and you get rate limited
    }


})

client.login(token);