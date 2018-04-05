exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    message.channel.send("Appreciate " + (member.nickname? member.nickname : member.user.username) + " guys!") ;
}

exports.help = {
    name: "appreciate",
    description: "Appreciate a user",
    usage: "appareciate <user>"
}