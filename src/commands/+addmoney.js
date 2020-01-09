const db = require("quick.db")
module.exports.run = async (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    if (!user) {
        return message.channel.send(`❌ ➤ ${message.author} Você não disse ninguém que você queira adicionar dinheiro!`)
    }
    const userMoney = db.get(`${user.id}.dinheiro`)
    let removeMoney = args[1]

    if (!removeMoney ) {
        return message.channel.send(`❌ ➤ ${message.author} Ok, mas e quanto de dinheiro ele(a) irá receber?`)
    }
    if (isNaN(removeMoney)) {
        return message.channel.send(`❌ ➤ ${message.author} Quantia inválida!`)
    }
    removeMoney = Math.round(removeMoney)
    if (user) {
        message.channel.send(`👤 ${message.author} Você adicionou \`${removeMoney}\`RL$ para \`${user.username}\`.`)
        db.add(`${user.id}.dinheiro`, removeMoney)
    }
    
   
}
module.exports.help = {
    aliases: ['+addmoney'],
    name: '+addmoney',
    description: 'Adiciona uma quantia de dinheiro a um user.',
    usage: '++addmoney @user <number>'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: '518830049949122571'
}