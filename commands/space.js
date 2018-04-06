exports.run = (client, message, args) => {
    // Takes all the arguments and changes it to a long string with spaces in between
    var spacedString = args.join('').split('').join(' ').replaceAll(',', ' ');
    message.channel.send(spacedString);
}

exports.help = {
    name: "space",
    description: "Displays the arguments spaced out Theo-style",
    usage: "space [arguments]"
}