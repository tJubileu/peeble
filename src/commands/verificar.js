const db = require("quick.db")
module.exports.run = async (client, message, args, utils) => {
  let prefix = db.get(`${message.guild.id}.prefix`)
  if (!message.guild.id == "646852060020604938") return message.channel.send(`${message.author} ➤ Este comando é exclusivo do meu servidor! (Para entrar nele, use **${prefix}convite**)`)
  let role = message.guild.roles.find(role => role.name === "🔹 Membros");
  message.member.addRole(role)
  message.react("✅")
  message.delete(6000)
   
}
module.exports.help = {
    aliases: ['verification'],
    name: 'verificar',
    description: 'Comando para se verificar no meu servidor!',
    usage: '+top'
}


module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo', /* You can make a category help command with this. */
    exclusiveTo: ''
}