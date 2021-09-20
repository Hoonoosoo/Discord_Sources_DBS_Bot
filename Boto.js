onst Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '%';

const fs = require('fs');
const { send } = require('process');


client.once('ready',  () => {
    console.log('Online!');
});

client.on('message' , message =>{

 if(!message.content.startsWith(prefix) || message.author.bot) return;

 const args = message.content.slice(prefix.length) .split(/ +/);
 const command = args.shift().toLowerCase();
 const part = message.content.split(' ');
 const search = part.slice(1).join(' ');
 const seerch = part.slice(2).join('');
 const URL1 = 'https://www.nytimes.com/search?query=' + search + '_' + seerch;
 const URL2= 'https://www.bbc.co.uk/search?q=/' + search + '_' + seerch; 
 const URL3= 'https://en.wikipedia.org/wiki/Special:Search?search=' +search +'_'  + seerch;
 const URL4= 'https://www.reuters.com/search/news?blob=' +search + '_' + seerch;
 const fonctions= crypto.CreateSign('RSA-SHA1').update(body).sign(key, 'base64');

 if(command === 'hello'){
     message.channel.send('enter');
 }

 if(command === 'привет'){
     message.channel.send('Путь завершён человек Иди ко мне');
 }

if(command === 'Зкнмшуе'){
    message.author.send('зкщмйеус шыйсщптйс екщгиду');
}

if(command === 'шыусйптщежшс'){
    message.author.send('шзйптйпй зщыеуптй ');
}

if(command === 'crypto'){
    message.author.send('Еру зкшсу шы ещвйню');
    message.author.send(fonctions);
}

 if (command == 'source'){
     message.channel.send('sources');
     message.channel.send(URL1);
     message.channel.send(URL2);
     message.channel.send(URL3);
     message.channel.send(URL4);

 }
});


client.login();
