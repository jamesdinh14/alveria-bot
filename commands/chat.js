exports.run = (client, message, args) => {
    let positive = ['on', 'start', 'begin'];
    let negative = ['off', 'stop','end'];

    if (positive.includes(args[0])) {
        client.isChatting = true;
        client.logger.log('Turning on Chat mode with IBM Watson');
    } else if (negative.includes(args[0])) {
        client.isChatting = false;
        client.logger.log('Turning off Chat mode with IBM Watson');
    } else {
        client.isChatting = !client.isChatting;
        client.logger.log(`Toggling Chat mode with IBM Watson, On: ${client.isChatting}`);
    }

    if (client.isChatting) {
        message.channel.send('Alveria is ready to chat.');
        client.chatChannel = message.channel;
    } else {
        message.channel.send('Alveria will stop chatting.');
        client.watsonContext = {};
    }
}

exports.help = {
    name: 'chat',
    description: 'Chat with Alveria',
    usage: 'chat [on/off]'
}