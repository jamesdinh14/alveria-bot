exports.run = (client) => {
    client.logger.log("Alveria is ready.");
    client.user.setStatus("online");
    client.user.setActivity('use a$help', { type: 'PLAYING' });
}