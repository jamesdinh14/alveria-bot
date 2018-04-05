module.exports = (client) => {
    client.loadCommand = (commandName) => {
        try {
          const props = require(`./commands/${commandName}`);
          client.logger.log(`Loading Command: ${props.help.name}. 👌`);
          if (props.init) {
            props.init(client);
          }
          client.commands.set(props.help.name, props);
          return false;
        } catch (e) {
          return `Unable to load command ${commandName}: ${e}`;
        }
    };
}