exports.run = (client, message, args) => {
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
        let messageSend = `${message.member.nickname? message.member.nickname : message.member.user.username} loves ${mentionedNamesFormatted}!`;
        client.sendMessage(message, messageSend);
    }
    else if (args.length !== 0) {
        let messageSend = `${message.member.nickname? message.member.nickname : message.member.user.username} loves ${args.join(" ")}!`;
        client.sendMessage(message, messageSend);
    }
    else {
        message.reply("Invalid use.");
    }
}

exports.help = {
    name: "love",
    description: "Show your love for anything and anyone",
    usage: "a$love [users] [roles] [args]"
}