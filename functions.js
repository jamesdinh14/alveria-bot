module.exports = (client) => {
  // Prepares the commands collection
  // Courtesy of guidebot
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

  // Courtesy of Finbarr on stackoverflow. https://stackoverflow.com/a/6832105
  client.readFromFile = (inputFileName) => {
    var fs = require('fs');
    return fs.readFileSync(inputFileName).toString().split('\n');
  };

  // Send the desired message to the current channel
  client.sendMessage = (message, messageToBeSent) => {
    message.channel.send(messageToBeSent);
  };

  // Form a string that is correctly displayed based on the number of arguments
  client.formatArguments = (inputArray) => {
    let outString = "";

    // Insert "and" at the 2nd to last position if there is more than 1 argument
    if (inputArray.length > 1) {
      inputArray.splice(-1, 1, `and ${inputArray[inputArray.length - 1]}`);

      // Insert commas or join two arguments
      if (inputArray.length > 2) {
        outString = inputArray.join(", ");
      } else {
        outString = inputArray.join(" ");
      }
    }
    return outString;
  }

  // Courtesy of guidebot
  // <Array>.random() returns a single random element from an array
  // [1, 2, 3, 4, 5].random() can return 1, 2, 3, 4 or 5.
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
  };

  // Courtesy of Cory Gross on stackoverflow. https://stackoverflow.com/a/17606289
  String.prototype.replaceAll = function (search, replace) {
    //if replace is not sent, return original string otherwise it will
    //replace search string with 'undefined'.
    if (replace === undefined) {
      return this.toString();
    }

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
  };
}