const db = require("quick.db")
exports.run = async (client, message, args, utils) => {
    let gay = "Ninguém"
    const user = message.mentions.users.first() || client.users.get(args[0])
    if (user) gay = user.tag
    else return message.channel.send(`${message.author} ➤  Você não disse quem você quer botar como gay!`)
    db.set(`gay`, gay)
    return message.channel.send(`${message.author} ➤ O gay atual agora é o(a): \`${gay}\`!`)
   
}
module.exports.help = {
    aliases: [],
    name: 'setgay',
    description: 'dsasad',
    usage: '+dsaasd'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação',
    exclusiveTo: ''
}