exports.run = (client, message, args) => {
    message.channel.send("Test successful.").catch(console.error);
};

exports.help = {
    name: "test",
    description: "Test to see if Alveria is working",
    usage: "test"
};