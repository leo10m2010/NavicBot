const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const ytdl = require('ytdl-core');
const search = require('youtube-search');


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
const fs = require('fs');
const Music = require("discord.js-musicbot-addon");

const ytdl = require('ytdl-core');
const nodeopus = require('node-opus');

const { YTSearcher } = require('ytsearcher');
const searcher = new YTSearcher('AIzaSyCLznr24tTbmK-L9Ht54lm3lOJaxi9n0kc');


Music.start(client, {
youtubeKey: 'TUKEY',
botPrefix: "!!",
messageHelp: true,
maxQueueSize: 10,
anyoneCanSkip: false,
ownerOverMember: false,//creo que este es para que solo el owner pueda poner musica
bigPicture: true,
defVolume: 20, //volumen por defecto 1 a 200
anyoneCanLeave: false //todos pueden poner para que el bot deje el canal de voz
})
//creo que aqui configuras las opciones del npm
Music.start(client, {
  command: {
    enabled: true,                    // True/False statement.
    alt: ["name1","name2","name3"],    // Array of alt names (aliases).
    help: "Help text.",                // String of help text.
    name: "play",                       // Name of the command.
    usage: "{{prefix}}play bad memes", // Usage text. {{prefix}} will insert the bots prefix.
    exclude: false                     // Excludes the command from the help command.
  }
});

client.on('message', msg => {
  if (msg.content === '.promo') {
    msg.reply('Promocion 2015 :sunglasses: ');
  }
});

client.login(process.env.token);