const comando = require('discord.js-commando');
const bot = new comando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NTAzNjU4NTU1ODY2NjExNzIy.Dq7-xQ.E7RDqSJ_4xM7hIUhYfmtKd8Db4c');