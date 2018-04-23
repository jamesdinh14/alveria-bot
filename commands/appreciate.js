exports.run = (client, message, args) => {
    // Select the first person mentioned and send a message
    if (message.mentions.members.first()) {
        let mentionedMembers = message.mentions.members.array();
        let mentionedMembersNames = [];
        mentionedMembers.forEach(member => {
            mentionedMembersNames.push((member.nickname)? member.nickname : member.user.username);
        });

        let mentionedMembersFormatted = client.formatArguments(mentionedMembersNames);
        let messageSend = `${message.member.nickname} appreciates ${mentionedMembersFormatted}!`;
        client.sendMessage(message, messageSend);
    } else if (message.mentions.roles.first()) {
        let mentionedRoles = message.mentions.roles.array();
        let mentionedRolesNames = [];
        message.mentions.roles.forEach(role => {
            mentionedRolesNames.push(role.name);
        });

        let mentionedRolesFormatted = client.formatArguments(mentionedRolesNames);
        let messageSend = `${message.member.nickname} appreciates ${mentionedRolesFormatted}!`;
        client.sendMessage(message, messageSend);
    }
    else if (args.length !== 0) {
        let messageSend = (`${message.member.nickname} appreciates ${args.join(" ")}!`);
        client.sendMessage(message, messageSend);
    }
    else {
        message.reply("Invalid use.");
    }
}

exports.help = {
    name: "appreciate",
    description: "Appreciate a user",
    usage: "appreciate <users> <roles>"
}