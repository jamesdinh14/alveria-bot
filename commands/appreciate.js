exports.run = (client, message, args) => {
    // Select the first person mentioned and send a message
    if (message.mentions.members.first() || message.mentions.roles.first()) {
        let mentionedMembers = message.mentions.members.array();
        let mentionedRoles = message.mentions.roles.array();
        let mentionedNames = [];

        mentionedMembers.forEach(member => {
            mentionedNames.push((member.nickname)? member.nickname : member.user.username);
        });

        mentionedRoles.forEach(role => {
            mentionedNames.push(role.name);
        });

        let mentionedNamesFormatted = client.formatArguments(mentionedNames);
        let messageSend = `${message.member.nickname? message.member.nickname : message.member.user.username} 
            appreciates ${mentionedNamesFormatted}!`;
        client.sendMessage(message, messageSend);
    }
    else if (args.length !== 0) {
        let messageSend = (`${message.member.nickname? message.member.nickname : message.member.user.username} 
            appreciates ${args.join(" ")}!`);
        client.sendMessage(message, messageSend);
    }
    else {
        message.reply("Invalid use.");
    }
}

exports.help = {
    name: "appreciate",
    description: "Show your appreciation for anything and anyone",
    usage: "a$appreciate [users] [roles] [args]"
}