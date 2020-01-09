function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    const userMoney = db.get(`${user.id}.dinheiro`)
    const removeMoney = args[1]
    if (!user) {
        return message.channel.send(`❌${message.author} Você precisa informar quem você quer tirar dinheiro.`)
    }
    if (!removeMoney ) {
        return message.channel.send(`❌ ${message.author} Você precisa informar alguma quantia para remover.`)
    }
    if (removeMoney === "all") {
        db.set(`${user.id}.dinheiro`, 0)
        return message.channel.send(`${message.author} Você removeu TODO o dinheiro de \`${user.username}\`.`)
    }
    if (isNaN(removeMoney)) {
        return message.channel.send(`❌ ${message.author} É necessário um número válido.`)
    }
    if (removeMoney > userMoney) {
        return message.channel.send(`❌ ${message.author} \`${user.username}\` possui menos dinheiro do que a quantia informada. \n*\`Ele possui ${userMoney} reals\`*.`)
    } 
    message.channel.send(`${message.author} Você removeu ${removeMoney} de dinheiro do \`${user.username}\`.`)
    db.add(`${user.id}.dinheiro`, -removeMoney)
    
   
}
module.exports.help = {
    aliases: ['+removemoney'],
    name: '+removemoney',
    description: 'Remove uma quantia de dinheiro de um user.',
    usage: '++removemoney @user <number>'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: '518830049949122571'
}