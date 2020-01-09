const db = require("quick.db")
exports.run = async (client, message, args, utils) => {
    const gay = db.get(`gay`)
    const prefix = db.get(`${message.guild.id}.prefix`)
    if (gay !== null) {
        return message.channel.send(`${message.author} ➤ O gay atual é o(a): \`${gay}\`!`)
    } else {
        return message.channel.send(`${message.author} ➤ Ainda não tem nenhum gay!\nEscolha um gay usando \`${prefix}setgay @membro\``)
    }
   
}
module.exports.help = {
    aliases: [],
    name: 'gay',
    description: 'dsadssad',
    usage: 'dsaasda'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}