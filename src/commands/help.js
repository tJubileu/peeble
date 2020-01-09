function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const fs = require("fs")
const db = require("quick.db")
const timestamp = require('time-stamp')
const { RichEmbed } = require("discord.js")
function RandomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}
exports.run = (client, message, args, utils) => {
  const prefix = db.get(`${message.guild.id}.prefix`)
  const emb1 = new RichEmbed()
    .setTitle("Lista de comandos")
    .setColor(0x0075ff)
    .setThumbnail("http://icons.iconarchive.com/icons/papirus-team/papirus-status/512/dialog-information-icon.png")
    .addField("😀 ➤➤ Diversão", `\`${prefix}sorte\`, \`${prefix}hug\`, \`${prefix}jkp\`,\`${prefix}nitro\`, \`${prefix}sorte\`, \`${prefix}estudar\``)
    .addField("⚙️ ➤➤ Moderação", `\`${prefix}ban\`, \`${prefix}kick\`, \`${prefix}renamechannel\`, \`${prefix}setprefix\`, \`${prefix}say\``)
    .addField("ℹ️ ➤➤ Informativo", `\`${prefix}photoshop\`, \`${prefix}avatar\`, \`${prefix}convite\`, \`${prefix}hora\`, \`${prefix}itens\`, \`${prefix}loja\`, \`${prefix}membercount\`, \`${prefix}ping\`, \`${prefix}profile\`, \`${prefix}randomnumber / rn\`, \`${prefix}servericon\`, \`${prefix}serverinfo\`, \`${prefix}top\`, \`${prefix}userinfo\``)
    .addField("💶 ➤➤ Econômia", `\`${prefix}apostar\`, \`${prefix}comprar\`, \`${prefix}daily\`, \`${prefix}money\`, \`${prefix}pay\`, \`${prefix}trabalhar\`, \`${prefix}sacar\`, \`${prefix}depositar\`, \`${prefix}emprego\``)
    .addField("<:pepe_pig:648612149945565185> ➤➤ Aleatórios", `\`${prefix}gay\`, \`${prefix}setgay\``)
    .addField("🌀 ➤➤ Sistemas", `- <:youtube:653311948850462730> YouTube (\`${prefix}yt help\`)\n- 🎮 Empresa de Jogos (\`${prefix}emp help\`)`)
    .setFooter("Mais comandos sendo adicionados diáriamente!")
    .setTimestamp()
  message.channel.send(emb1)

}   
module.exports.help = {
    aliases: ['ajuda'],
    name: 'help',
    description: 'sas',
    usage: '+sasdds'
}

// Configuration


module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Administração',
    exclusiveTo: ''
}           
           
          
         
        
       
      
     
    
   
  
 
