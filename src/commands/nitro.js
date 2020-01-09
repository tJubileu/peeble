const { RichEmbed } = require("discord.js")
exports.run = (client, message, args, utils) => {
    message.delete()
    const emb = new RichEmbed()
        .setImage("https://cdn.discordapp.com/attachments/613119479609557052/647184649038200873/Screenshot_20190622-1704192-2-1-1.png")
    message.channel.send("https://discord.git/q4aqnTXKgR8fBBk4")
    message.channel.send(emb)
}
module.exports.help = {
    aliases: ['troll'],
    name: 'nitro',
    description: 'Comando perfeito para trollar alguém.',
    usage: '+nitro'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão',
    exclusiveTo: ''
}