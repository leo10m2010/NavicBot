const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const PREFIX = '?'
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

 client.on('message', async message => {
  if(message.author.bot) return
  if(!message.content.startsWith(PREFIX)) return
  
  const args = message.content.substring(PREFIX.length).split("")

  if(message.content.startsWith(`${PREFIX}play`)){
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return message.channel.send("You need to")
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if(!permissions.has('CONNECT')) return message.channel.send("permiso")
    if(!permissions.has('SPEAK')) return message.channel.send("I dont have permissions to speak in the channel")
     
    try{
      var connection = await voiceChannel.join()
     } catch(error) {
        console.log(`There was an error connecting to the voice channel: ${error}`)
        return message.channel.send(`There was an error connecting to the voice channel: ${error} `)
     }

     const dispatcher = connection.play(ytdl(args[1]))
     .on('finish',() => {
       voiceChannel.leave()
     })
     .on('error', error => {
       console.log(error)
     })
     dispatcher.setVolumeLogarithmic(5 / 5)
  } else if (message.content.startsWith(`${PREFIX}stop`)){
    if(!message.member.voice.channel) return message.channel.send("You need to be in a voice channel to stop the music")
    message.member.voice.channel.leave()
    return undefined
  }
  })

//client.on('message', msg => {
  //if (msg.content === '.promo') {
    //msg.reply('Promocion 2015 :sunglasses: ');
  //}
//});

client.login(process.env.token);