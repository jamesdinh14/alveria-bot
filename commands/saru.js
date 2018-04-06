exports.run = (client, message, args) => {
    var phrases = client.readFromFile("saru_phrases.txt");

    message.channel.send(phrases.random());
}

exports.help = {
    name: "saru",
    description: "Returns a random Saru phrase",
    usage: "saru"
}