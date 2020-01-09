function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0]) || message.author
    let lastDaily = await db.fetch(`LastVid_${user.id}`)
    if (lastDaily === null) {
        return message.channel.send(`${message.author} Este membro (ou você) já podem usar o +yt postar!`)
    } else {
        message.channel.send(`${message.author} Delay de postar vídeo resetado com sucesso! `)
        db.set(`LastVid_${user.id}`, 0)
    }
    
   
}
module.exports.help = {
    aliases: ['+resetvid'],
    name: '+removevid',
    description: 'Reseta um vid delay.',
    usage: '++removevid @membro'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: '518830049949122571'
}