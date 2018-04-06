exports.run = (client, message, args) => {
    // Select the first person mentioned and send a message
    if (message.mentions.members.first()) {
        let member = message.mentions.members.first();
        message.channel.send(`Appreciate ${member} guys!`);
    } else {
        message.reply("Invalid user.");
    }
    
    
}

exports.help = {
    name: "appreciate",
    description: "Appreciate a user",
    usage: "appareciate <user>"
}