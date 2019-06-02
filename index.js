//Copyright 2019 - LolzChannelYT And InfinityWolf

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTgzMzk1ODYzOTg0OTk2NDYz.XO_MYQ.FrPfaLYD-G2-xPwqsHf568gi0Sw';

const PREFIX = '!';

//ALTS
var email = ["Carrv97@gmail.com", "Brett.shalagan@shaw.ca", "286520319@qq.com","Dosborne822@gmail.com","21tzortziss@peabodystu.org","HeywoodJ75@gmail.com","Cspewak@cox.net","Domanic3277@hotmail.com","Dan.head.18@Hotmail.co.uk","Brian_j_soccer@yahoo.com","Fiona@giuffre.net","Annloftis@aol.com","4nomadsnga@comcast.net","DrewDunleavy@comcast.net","Halo.alphabarc99@gmail.com"];
var links = ["http://tmearn.com/iRX9", "http://tmearn.com/V6vb", "http://tmearn.com/0mZK5W4","http://tmearn.com/hF5akR6","http://tmearn.com/B8Cndu","http://tmearn.com/1ikMOa","http://tmearn.com/jJQcmG","http://tmearn.com/eX2c","http://tmearn.com/fbzm1qpY","http://tmearn.com/G6PpTN","http://tmearn.com/yoJTxOuc","http://tmearn.com/esYfDzu","http://tmearn.com/vkzJX","http://tmearn.com/AxlXIGu","http://tmearn.com/UL6t"];

var rand;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.on('ready', () =>{
    console.log('This bot is online!');
	bot.user.setActivity('with fire.');
})

bot.on('message', message=>{
	if (message.channel.id != 584138628599513098) return; //only read #freeminecraft or stop.
	
	let args = message.content.substring(PREFIX.length).split(" ");


    if(args [0] == 'minecraft'){
			//send public and private message to sender of command
			rand = getRandomInt(0, 14);
			message.author.send('**ðšˆðš˜ðšžðš› ðš—ðšŽðš  ð™¼ðš’ðš—ðšŽðšŒðš›ðšŠðšðš ð™°ðšŒðšŒðš˜ðšžðš—ðš:**\nEmail: ' + email[rand] + ' \nPassword: ' + links[rand] + ' \nClick the link above to view the password. \:grin:\n\n*Made with* \:heart:  *by âŽð‹ð¨ð¥ð³ð‚ð¡ðšð§ð§ðžð¥YTâŽ #4478 and InfinityWolf#1273.*');
			message.reply('The Account Has Been Sent, Enjoy! :D');
			

    }else{
			//anything other then !minecraft is not allowed in #freeminecraft
			if(message.author.bot) return; //bots are allowed to type other things than !minecraft
			message.delete();
			message.author.send('\:octagonal_sign: **Your message was removed!**\nPlease only use the **!minecraft** command in the **#freeminecraft** channel. (Case Sensitive)');
	}
}
)

bot.login(process.env.BOT_TOKEN);
