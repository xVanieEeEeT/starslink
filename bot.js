const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'l$';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("United. || Links","https://twitch.tv//9ivv")
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });


    client.on('message', async msg => {
  if(msg.content.startsWith("رابط")) {

   msg.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
  }).then(invite =>
   msg.author.sendMessage(`
         <@${msg.author.id}> 
         **- رابــط لسيـرفر , Stars.. :leaves: **
         **- [ ${invite.url} ]**
         **- عـدد الاستخدامات , 5 **
         `)
  )
    msg.channel.send(`**تم ارسال الرابط في الخاص .. :dove: .**`)
  }

    });


client.login(process.env.BOT_TOKEN);
