// https://github.com/17teen
// Discord: 7teen#1464

const Discord = require('discord.js');
const client = new Discord.Client();
const { red, green, blue, yellow, cyan, greenBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;


client.on("ready", () => {
    console.log(``);
    console.log(``);
    console.log(greenBright(`                                      Logged in as: ${client.user.username}#${client.user.discriminator}`))
    console.log(greenBright(`                                      Prefix: ${prefix}`))
    console.log(``);
    console.log(``);
});

client.on("message", message => {


    if (message.content.startsWith(prefix + "tts")) {

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        // If you give an input
        for (var i = 0; i < 200; i++) {
            message.channel.send(argresult, {
                tts: true,
            });
        }
    
    }


})

client.login(token);