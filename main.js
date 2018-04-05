'use strict mode';

const Discord = require("discord.js");
const client = new Discord.Client();

if (process.env.NODE_ENV !== "production") {
    require('dotenv').load();
}

client.on("ready", () => {
    console.log("ready");
});

let prefix = "$";
client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "test") {
        message.channel.send("Test successful.")
    }
});

client.login(process.env.TOKEN);