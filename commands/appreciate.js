exports.run = (client, message, args) => {
    // Select the first person mentioned and send a message
    if (message.mentions.members.first()) {
        let members = [];
        let membersDisplay = [];
        
        message.mentions.members.forEach(member => {
            members.push(member);
        });

        let count = 0;
        members.forEach(member => {
            if (count === members.length - 1 && members.length > 1) {
                membersDisplay.push("and");
            }
            
            if (!member.nickname) {
                membersDisplay.push(member.user.username);
            } else {
                membersDisplay.push(member.nickname);
            }
            count++;
        })

        let messageSend = `${message.member.nickname} appreciates ${membersDisplay.join(" ")}!`;
        client.sendMessage(message, messageSend);
    } else if (message.mentions.roles.first()) {
        let mentionedRoles = [];
        let mentionedRolesDisplay = [];

        message.mentions.roles.forEach(role => {
            mentionedRoles.push(role.name);
        });

        let count = 0;
        mentionedRoles.forEach(roleName => {
            // Add "and" to the 2nd to last position
            if (count === mentionedRoles.length - 1 && mentionedRoles.length > 1) {
                mentionedRolesDisplay.push("and");
            }
            mentionedRolesDisplay.push(roleName);
            count++;
        });

        let messageSend = `${message.member.nickname} appreciates ${mentionedRolesDisplay.join(" ")}!`;
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
    usage: "appreciate <user>"
}