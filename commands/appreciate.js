exports.run = (client, message, args) => {
    // Select the first person mentioned and send a message
    let member = message.mentions.members.first();
    message.channel.send("Appreciate " + (member.nickname? member.nickname : member.user.username) + " guys!") ;
}

exports.help = {
    name: "appreciate",
    description: "Appreciate a user",
    usage: "appareciate <user>"
}