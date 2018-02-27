const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "m!";


client.on("ready", () => {
  console.log("you got it, bitch");
});

client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (command === "agree") {
      message.channel.send(args);
  }
  if (command === "shame") {
    message.channel.send("**SHAME**");
  }
  if (command === "911") {
      message.channel.send(":police_car: :police_car: <@212829797171068928>" + (args));
  }

  if (command === "validateme") {
      message.channel.send("**I LOVE YOU, BITCH!!!**");  
  }

  if (command === "kill") {
    let member = message.mentions.members.first();
    message.channel.send((member) + ":gun: :gun:");
  }
  
});

client.login(process.emv."NDE3Nzc1NTA3NzgyODkzNTgw.DXYZDw.GiUefvHLhfo0CLSkfqy8_Kitm0k");
