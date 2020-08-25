const Discord = require('discord.js');
const client = new Discord.Client();

function presence(){
    client.user.setPresence({
       status: "online",
       activity: {
          name: "Fall Guys",
          type: "PLAYING"
       }
    });
 }
client.on('ready', () => {
  console.log("Estoy listo!");
  presence();
});


client.on("guildMemberAdd", miembro =>{
    var Canal = client.channels.cache.find(channel => channel.id === ("747288908584452216"));
    Canal.send("Bienvenido <@" + miembro.id + "> al servidor, recuerda hablar con respeto.\n\nEsperemos que la pases bien :). :stuck_out_tongue_winking_eye: ");
 });

client.on('message', msg => {
  if (msg.content === '.hp') {
    msg.reply('Feliz Cumpleaños Negro :pato:');
  }
});

client.login('process.env.token');