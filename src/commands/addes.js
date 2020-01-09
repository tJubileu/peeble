function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (client, message, args, utils) => {
    if (message.guild.id == "628326759754104855") {
    if(message.member.roles.find("name", "Ovelha Deusa") || message.member.roles.find("name", "Ovelhas Administradoras")){
        const user = message.mentions.users.first() || client.users.get(args[0]) 
        if (!user) {
            return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer quem você quer adicionar essências.`)
        }
        const userMoney = db.get(`${user.id}.essencia`)
        const removeMoney = args[1]
        if (userMoney == null) db.set(`${user.id}.essencia`, 0)
    
        if (!removeMoney ) {
            return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer uma quantia de essências para adicionar.`)
        }
        if (isNaN(removeMoney)) {
            return message.channel.send(`❌ ➤ ${message.author} É necessário um número válido.`)
        }
        if (user) {
            message.channel.send(`${message.author} ➤ Você deu ${removeMoney.toLocaleString("pt-BR")} essências ao usuário \`${user.username}\`.`)
            db.add(`${user.id}.essencia`, removeMoney)
        }
    }else{
        return message.channel.send(`${message.author} Você não possui permissão para executar este comando!`)
    }
    
}
   
}
module.exports.help = {
    aliases: [],
    name: 'addes',
    description: 'Adiciona uma quantia de essência a um user.',
    usage: '++addmoney @user <number>'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}