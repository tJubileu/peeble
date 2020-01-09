const { RichEmbed } = require("discord.js")
exports.run = (client, message, args, utils) => {
    const countEmbed = new RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Contagem de Membros do Servidor\n" + message.guild.name + ":")
        .addField("🤖 Bots", message.guild.members.filter(member => member.user.bot).size, true)
        .addField("🙂 Membros", message.guild.members.filter(member => !member.user.bot).size, true)
        .addField("‎‎‎", "‎‎‎")
        .addField("🗒️ Total ", message.guild.memberCount)
    message.channel.send(countEmbed)
    
}
module.exports.help = {
    aliases: ['membros', 'members'],
    name: 'membercount',
    description: 'Quer saber quantos membros e bots tem no servidor atualmente? Esse comando irá te dizer.',
    usage: '+membercount'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}