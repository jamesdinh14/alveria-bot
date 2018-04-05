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

  String.prototype.replaceAll = function (search, replace) {
    //if replace is not sent, return original string otherwise it will
    //replace search string with 'undefined'.
    if (replace === undefined) {
      return this.toString();
    }

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
  };
}