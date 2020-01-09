const db = require("quick.db")
const { RichEmbed } = require("discord.js")
const ids = [
    "518830049949122571",
    "556480900913954836",
    "288367528646803466"
]
module.exports.run = async (client, message, args, utils) => {
    if (!ids.includes(message.author.id)) return message.channel.send(`❌ ➤ ${message.author} Comando restrito para Moderadores da Lixeira Robótica!`)
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    const reason = args.slice(1).join(" ")
    if (!args[0] || !user || user == null) {
        return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer quem você quer banir de me utilizar.`)
    }
    if (user.id === "518830049949122571") return message.channel.send(`❌ ➤ ${message.author} Você não pode banir meu dono!`)
    if (!reason || !args[1]) return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer qual é o motivo do bot-ban.`)
    const punishz = new RichEmbed()
        .setTitle("💀 Punição")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField(`Usuário Punido`, user.tag, true)
        .addField(`Punição`, `\`Bot-ban\``)
        .addField(`Punido no Servidor`, `\`${message.guild.name}\` (${message.guild.id})`, true)
        .addField(`Motivo`, `\`${reason}\``)
        .setTimestamp()

    const bban = db.get(`${user.id}.ban`)
    if (bban == null) db.get(`${user.id}.ban`, 0)
    if (bban == 1) return message.channel.send(`❌ ➤ ${message.author} Este usuário já está bot-banido!`)
    if (!bban == 1) {
        db.set(`${user.id}.ban`, 1)
        client.channels.get("660646564439785485").send(punishz)
        return message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Este usuário foi bot-banido! (\`${user.username}\`)`)
    }
   const punish = new RichEmbed()
    .setTitle("💀 Punição")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .addField(`Usuário Punido`, user.tag, true)
    .addField(`Punição`, `\`Bot-ban\``)
    .addField(`Punido no Servidor`, `\`${message.guild.name}\` (${message.guild.id})`, true)
    .addField(`Motivo`, `\`${reason}\``)
    .setTimestamp()
}
module.exports.help = {
    aliases: ['+bban'],
    name: '+botban',
    description: 'Bane um usuário de usar comandos.',
    usage: '++botban @user'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação', /* You can make a category help command with this. */
    exclusiveTo: ''
}