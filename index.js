const Discord = require('discord.js');
const client = new Discord.Client();

function presence(){
    client.user.setPresence({
       status: "online",
       activity: {
          name: "Bingo Hot",
          type: "WATCHING"
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

////////MUSICA//////////////////

client.on('message', msg => {
  if (msg.content === '.promo') {
    msg.reply('Promocion 2015 :sunglasses: ');
  }
});

client.login(process.env.token);