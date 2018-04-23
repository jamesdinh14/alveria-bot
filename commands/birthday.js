exports.run = (client, message, args) => {

    if (message.mentions.members.first() || message.mentions.roles.first()) {
        // Select all the users/roles mentioned and send them a birthday message
        let birthdayPeople = message.mentions.members.array();
        let birthdayRoles = message.mentions.roles.array();
        let birthdayNames = [];

        birthdayPeople.forEach(member => {
            birthdayNames.push(member.nickname? member.nickname : member.user.username);
        });

        birthdayRoles.forEach(role => {
            birthdayNames.push(role.name);
        });

        let birthdayNamesFormatted = client.formatArguments(birthdayNames);

        let birthdayMessage = `Happy birthday ${birthdayNamesFormatted}!`;
        client.sendMessage(message, birthdayMessage);
    } else if (args) {
        message.channel.send(`Happy birthday ${args}!`);
    } else {
        message.reply("Invalid members.");
    }

}

exports.help = {
    name: "birthday",
    description: "Wishes people (or anything) a happy birthday",
    usage: "birthday [user] [role] [args]"
}