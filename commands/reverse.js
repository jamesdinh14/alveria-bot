exports.run = (client, message, ...args) => {
    var reverseString = args.join(' ').split('').reverse().join('').replaceAll(',', ' ');
    message.channel.send(reverseString);
}

exports.help = {
    name: "reverse",
    description: "Reverses the given argument",
    usage: "reverse <argument>"
}