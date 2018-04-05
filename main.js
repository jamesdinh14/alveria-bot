'use strict mode';

const Discord = require("discord.js");
const client = new Discord.Client();
fs = require("fs");

if (process.env.NODE_ENV !== "production") {
    require('dotenv').load();
}

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });

let prefix = "$";
client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
      } catch (err) {
        console.error(err);
      }
});

client.login(process.env.TOKEN);