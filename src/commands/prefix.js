const { RichEmbed } = require("discord.js")

let db = require("quick.db")
exports.run = (client, message, args, utils) => {
    const serverID = message.guild.id 
    const prefix = db.get(`${serverID}.prefix`)

    if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id != "518830049949122571") {
        return message.channel.send(`❌ ➤ ${message.author} Você não tem a permissão "Administrador"!`)
    }
    if (!args[0] || args[0] == "") return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer qual o novo prefix!`)
    if (args[0] == prefix) return message.channel.send(`❌ ➤ ${message.author} Diga um prefix diferente do atual.`)
    message.channel.send(`<:correct:659543887416786956> ➤ ${message.author} Você alterou o prefix do servidor para \`${args[0]}\`!`)
    db.set(`${serverID}.prefix`, args[0])

}
module.exports.help = {
    aliases: ['setprefix'],
    name: 'prefix',
    description: 'Quer ver a foto de um membro (ou a sua)? Use este comando!',
    usage: '+avatar @member'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}