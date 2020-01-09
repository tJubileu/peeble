const { RichEmbed } = require("discord.js")
exports.run = (client, message, args, utils) => {
    
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    const emoji = client.emojis.find(emoji => emoji.name === "pepeHug") 
    if (user.id === message.author.id) {
        message.channel.send(`${message.author} ➤ Você não pode se abraçar!`)
        return
    }
    if (user !== null) {
        const hugEmbed = new RichEmbed()
            .setColor(0x0091ff)
            .setDescription(`${emoji} ${message.author} **Deu um abraço forte no(a)** ${user}!`)
            .setImage("https://cdn.discordapp.com/attachments/613119479609557052/638771931881144361/DrHZhvWWwAA9iS6.png")
            .setTimestamp()
            .setFooter("Este comando foi utilizado pelo(a): " + message.author.tag);
        message.channel.send(hugEmbed)
    } else {
        message.channel.send(`${message.author} ➤ Você precisa mencionar quem você quer abraçar. <:knuckles2:623642629439225877>`)
    }
}
module.exports.help = {
    aliases: ['abraçar', 'abracar', 'abraco', 'abraço'],
    name: 'hug',
    description: 'Quer abraçar alguém? Este é o comando pra isso!',
    usage: '+hug @membro'
}

// Configuration

module.exports.config = {
    args: true, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Diversão',
    exclusiveTo: ''
}