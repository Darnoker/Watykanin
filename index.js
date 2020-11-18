const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const cron= require('cron');
const superagent = require('superagent');

client.login('NzY1OTg0MzY0ODE0NTMyNjU5.X4cwhw.IT6PUB6FNLza2AVd411eEC2HXUs');
client.on("ready", () => {


    console.log("Ready!");
 
})    

  let scheduledBarka = new cron.CronJob('00 37 21 * * *', () => {
    client.guilds.cache.forEach( (guild) =>{
      var chx = guild.channels.cache.filter(ch => ch.type ==='voice').random();
     
      try{ 
        chx.join().then(connection => {
        const stream = ytdl('https://youtu.be/1dOt_VcbgyA', { filter: 'audioonly' }).on("error", e => {
          console.error(e);
          message.channel.send("Error Occured during streaming YouTube.\n");
        });
        
        let dispatcher = connection.play(stream);
        message.channel.send("B");
        
        dispatcher.on("end-of-stream", e =>{
          voiceChannel.leave();
        });
       })
      }
      catch{


      }
      finally{
        chx.join().then(connection => {
          const stream = ytdl('https://youtu.be/1dOt_VcbgyA', { filter: 'audioonly' }).on("error", e => {
            console.error(e);
            message.channel.send("Error Occured during streaming YouTube.\n");
          });
          let dispatcher = connection.play(stream);
          message.channel.send("B");
          dispatcher.on("end-of-stream", e =>{
            voiceChannel.leave();
          });
         })
     }
    })
      client.guilds.cache.forEach((guild)=>{
        let defaultChannel = "";
        guild.channels.cache.forEach((channel) => {
          if(channel.type == "text" && defaultChannel == "") {
          if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
            defaultChannel = channel;
        }
       }

      })
     defaultChannel.send("21 37 barka time"); //send it to whatever channel the bot has permissions to send on
    })

  
})
scheduledBarka.start();
     

client.on('message', async message => {
  //args
  var args = message.content.split(" ").slice(1);
  if(message.content === '21 37' || message.content==='2137')
    message.channel.send('Tak Pan Jezus powiedzial');
    
  else if(message.content.toLowerCase()==='barka')
  {
    message.channel.send("Pan kiedyś stanął nad brzegiem, \n Szukał ludzi gotowych pójść za mną \n By łowić serca \n Słów Bożych prawdą. \n \n  O Panie, to Ty na mnie spojrzałeś, \n Twoje usta dziś wyrzekły me imię. \n Swoją barkę pozostawiam na brzegu, \n Razem z Tobą nowy zacznę dziś łów. \n \n Jestem ubogim człowiekiem, \n Moim skarbem są ręce gotowe \n Do pracy pójść z Tobą \n I czyste serce. \n \n --Refren-- \n \n Dziś wypłyniemy już razem \n Łowić serca na morzach dusz ludzkich \n Twej prawdy siecią \n I słowem życia \n \n ===Refren===");
  }

  else if(message.content.toLowerCase()==='kremówka')
  {
    message.channel.send('Nie mogę powiedzieć, żebym ich nie lubiał :) ');
  }
  else if(message.content.toLowerCase().startsWith("memy"))
  {
    if (args[0] == "jebać") {
      return message.channel.send("aa to jebać");  
    }
    let {body} = await superagent
    .get('https://meme-api.herokuapp.com/gimme')

    let memembed = new Discord.MessageEmbed()
    .setColor("ff9900")
    .setTitle(body.title)
    .setImage(body.url)
    .setFooter(`👍 ${body.ups} | dodane przez ${body.author} | r/${body.subreddit}`)
    
    message.channel.send(memembed);
  }

  else if(message.content.toLowerCase() === "kuweta") {
    message.channel.send("Kot sie wlasnie zesrał");
  }
})
  

// client.on('ready', () => {
//     let targetGuild = client.guilds.cache.get('624661257399828485')
//     setTimeout(() => {
//          targetGuild.channels.cache.filter(ch => ch.type === 'voice').random().join()
//     }, 10000);
//   }); 



//     chx.join().then(connection => {
//       const stream = ytdl('https://www.youtube.com/watch?v=1dOt_VcbgyA&ab_channel=JebusChytrus', { filter: 'audioonly' });
//      const dispatcher = connection.play(stream);

//     dispatcher.on('finish', () => chx.leave());

//     scheduledBarka.start();


//     })
// })
  