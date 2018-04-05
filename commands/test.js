exports.run = (client, message, args) => {
    message.channel.send("Test successful.").catch(console.error);
}