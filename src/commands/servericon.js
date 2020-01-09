const { RichEmbed } = require("discord.js")
exports.run = (client, message, args, utils) => {
    const emb = new RichEmbed()
        .setTitle("Imagem do Servidor\n" + message.guild.name)
        .setImage(message.guild.iconURL)
        .setTimestamp()
        .setFooter(`Comando usado por: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
    message.channel.send(emb)

}
module.exports.help = {
    aliases: [],
    name: 'servericon',
    description: 'Mostra o icon do server.',
    usage: '+invite'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}