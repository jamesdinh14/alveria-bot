// Courtesy of guidebot for the base help.js

exports.run = (client, message, args) => {
     // If no specific command is called, show all filtered commands.
  if (!args[0]) {    
    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const commandNames = client.commands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `= Command List =\n\n[Use ${client.prefix}help <commandname> for details]\n`;
    const sorted = client.commands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      output += `${client.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
    });
    message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}\n= ${command.help.name} =`, {code:"asciidoc"});
    }
  }
};

exports.help = {
    name: "help",
    description: "Displays more information about a command",
    usage: "test [command]"
};