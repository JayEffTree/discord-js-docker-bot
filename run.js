const Discord = require('discord.js');
const client = new Discord.Client();
var bot_config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //Owner Commands
  if (msg.author.id == `${bot_config.botowner}`){

    try{
      if (msg.content === '!ping') {
        msg.reply(`pong`);
      }
      if (msg.content === '!shutdown') {
        process.exit(1);
      }
    }catch(e){
      console.log(e)
    }

  };

});

client.login(bot_config.token);
