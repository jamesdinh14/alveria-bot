exports.run = (client, message, args) => {

    if (message.mentions.members) {
        // Select all the users mentioned and send them a birthday message
        let birthdayPeople = message.mentions.members.array();

        message.channel.send(`Happy birthday ${birthdayPeople}!`);
    } else {
        message.reply("Invalid members.");
    }

}

exports.help = {
    name: "birthday",
    description: "Wishes someone a happy birthday",
    usage: "birthday <user>"
}