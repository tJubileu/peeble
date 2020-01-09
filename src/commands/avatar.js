const { RichEmbed } = require("discord.js")
exports.run = (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0]) || message.author 
        if (user) {
            const avatarEmbed = new RichEmbed()
                .setColor(0x0091ff)
                .setTitle("📸 " + user.username)
                .setImage(user.avatarURL)
            message.channel.send(avatarEmbed)
        }

}
module.exports.help = {
    aliases: ['perfilimage', 'userimage'],
    name: 'avatar',
    description: 'Quer ver a foto de um membro (ou a sua)? Use este comando!',
    usage: '+avatar @membro'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Informativo',
    exclusiveTo: ''
}