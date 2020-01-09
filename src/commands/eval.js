function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const fs = require("fs")
const db = require("quick.db")
const timestamp = require('time-stamp')
const moment = require('moment')
const jimp = require('jimp')
const { RichEmbed } = require("discord.js")
function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
function RandomArray(arrName) {
  return arrName[Math.floor(Math.random() * arrName.length)]
}
function removeArray(arr) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax= arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
      }
  }
  return arr;
}
exports.run = async (client, message, args, utils) => {
    function sendMessage(msg) {
        return message.channel.send(msg)
    }
    function channelSend(id, msg) {
        return client.channels.get(id).send(msg)
    }
    function userSend(id, msg) {
      return client.users.get(id).send(msg)
    }

    if(message.author.id !== "518830049949122571") return message.channel.send(`❌ ➤ ${message.author} Este comando é restrito! (Somente pessoas autorizadas podem utilizar ele)`)
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      if (evaled === "Promise { <pending> }") {
        evaled = "Código executado"
        message.channel.send(clean(evaled), {code:"xl"}).then(m => m.delete(3000))
      } else {
       message.channel.send(clean(evaled), {code:"xl"});
      }
    } catch (err) {
      message.channel.send(`\`\`ERRO\`\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

}   
module.exports.help = {
    aliases: ['execute'],
    name: 'eval',
    description: 'Comando restrito',
    usage: '+eval'
}

// Configuration


module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Administração',
    exclusiveTo: ''
}           
           
          
         
        
       
      
     
    
   
  
 
