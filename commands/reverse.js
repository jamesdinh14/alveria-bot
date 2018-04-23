exports.run = (client, message, ...args) => {
    // Reverse all the arguments
    // nodejs inserts commas during the join, so need to replace them
    // This will also result in losing commas originally in the string
    var reverseString = args.join(' ').split('').reverse().join('').replaceAll(',', ' ');
    client.sendMessage(message, reverseString);
}

exports.help = {
    name: "reverse",
    description: "Reverses the given argument",
    usage: "reverse [arguments]"
}