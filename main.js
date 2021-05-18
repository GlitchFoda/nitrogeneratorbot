const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '.';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}gen`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(16));

    }


    if (msg.content.startsWith(`${prefix}start`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(16));

        }, 2000);

    }

});

client.on('ready', async () => {
	console.log('Criado por GlitchCorleone#9999`')

    let statuses = [
        `Created by GlitchCorleone#9999`,
        `${client.users.cache.size} FREE: https://discord.gg/crUwKFxgER`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "STREAMING",
            url: "https://www.twitch.tv/glitcherz_"
        })
    }, 4000)
})

client.login('ODI1NTE3ODE0OTk5Njc5MDE2.YF_FYA.nKEjZFfSW3qKBmynAzN1NuXxGb4')