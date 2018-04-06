exports.run = (client) => {
    client.logger.log("Alveria is ready.")
    client.user.setStatus("online");
    client.user.setActivity({game: {name: "a$help to view commands", type: 0}});
}