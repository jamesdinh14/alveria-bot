'use strict mode';

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
const Enmap = require('enmap');
client.commands = new Enmap();
client.prefix = "a$";

require('./functions.js')(client);
client.logger = require("./util/Logger");

if (process.env.NODE_ENV !== "production") {
    require('dotenv').load();
}

const init = async () => {
    const cmdFiles = await readdir("./commands/");
    cmdFiles.forEach(f => {
        if (!f.endsWith(".js")) return;
        const response = client.loadCommand(f);
        if (response) console.log(response);
    });

    // Then we load events, which will include our message and ready event.
    const evtFiles = await readdir("./events/");
    client.logger.log(`Loading a total of ${evtFiles.length} events.`);
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0];
        const event = require(`./events/${file}`);
        // This line is awesome by the way. Just sayin'.
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
    
};

init();

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

client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Check to see if input command is valid
    if (!client.commands.has(`${command}`)){
        console.log("Command does not exist.");
        return;
    }

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(process.env.TOKEN);