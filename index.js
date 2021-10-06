const Discord = require("discord.js");
const config = require("./config.json");
const keep_alive = require('./keep_alive.js')

const bot = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const channel = bot.channels.cache.get(config.channel)
const prefix = config.prefix
const aliases = config.squidAliases

//Bot Initialization
bot.on('ready', () => {
  console.log('Bot Online')
})
bot.login(token)

//Get Args & Prefix
bot.on('message', async (msg) => {
  const args = msg.content.slice(prefix.length).trim().split(' ')
  const command = args.shift().toLowerCase()
    const args2 = msg.content.slice(prefix.length+command.length)
    
  //Thanks Squid!
  console.log(msg.content);
  if (msg.content.toUpperCase().includes('THANKS SQUID') && msg.channel.id == config.channel) {
  msg.reply("You're welcome!");
  msg.react('❤️');
  }
})