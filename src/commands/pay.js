function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const db = require("quick.db")
const ms = require("parse-ms")
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui"];

function abN(number){

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}
module.exports.run = async (client, message, args, utils) => {
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    const userMoney = db.get(`${message.author.id}.dinheiro`)
    if (userMoney == null) db.set(`${message.author.id}.dinheiro`, 0)
    if (db.get(`${user.id}.dinheiro`) == null) db.set(`${user.id}.dinheiro`, 0)
    const quantity = args[1]
    if (!args[0] || user == null) {
        return message.channel.send(`❌ ➤ ${message.author} Ok... Mas pra quem você quer enviar esse dinheiro?`)
    }
    if (user.id === message.author.id) return message.channel.send(`❌ ➤ ${message.author} Você não pode pagar você mesmo, afinal, não mudaria nada!`)
    if (!quantity ) {
        return message.channel.send(`❌ ➤ ${message.author} Você precisa informar alguma quantia para enviar!`)
    }
    if (quantity === "tudo") {
        const cnt = userMoney
        db.add(`${user.id}.dinheiro`, cnt)
        message.channel.send(`💰 ${message.author} ➤ Você deu todos os seus Reals para o(a) ${user.username}! \`${cnt} (${abN(cnt)}) Reals\``)
        return db.subtract(`${message.author.id}.dinheiro`, cnt)
    }
    if (quantity === "metade") {
        const cnt = userMoney /2
        db.add(`${user.id}.dinheiro`, cnt)
        message.channel.send(`💰 ${message.author} ➤ Você enviou metade dos seus Reals para o(a) ${user.username}! \`${cnt} (${abN(cnt)}) Reals\``)
        return db.subtract(`${message.author.id}.dinheiro`, cnt)
    }
    if (quantity === "1b" || quantity === "1bi") {
        if (userMoney < 1000000000) {
            return message.channel.send(`${message.author} ➤ Você não tem essa quantia!`)
        }
        quantity = 1000000000
    }
    if (quantity === "1m"||quantity === "1mi") {
        if (userMoney < 1000000) {
            return message.channel.send(`${message.author} ➤ Você não tem essa quantia!`)
        }
        quantity = 1000000
    }
    if (quantity === "1t" ||quantity === "1tri") {
        if (userMoney < 1000000000000) {
            return message.channel.send(`${message.author} ➤ Você não tem essa quantia!`)
        }
        quantity = 1000000000000
    }
    if (quantity === "1quad") {
        if (userMoney < 1000000000000000) {
            return message.channel.send(`${message.author} ➤ Você não tem essa quantia!`)
        }
        quantity = 1000000000000000
    }
    if (quantity === "1k") {
        if (userMoney < 1000) {
            return message.channel.send(`${message.author} ➤ Você não tem essa quantia!`)
        }
        quantity = 1000
    }
    if (quantity === "1q" || quantity === "1qui") {
        if (userMoney < 1000000000000000000) {
            return message.channel.send(`${message.author} ➤ Você não tem essa quantia!`)
        }
        quantity = 1000000000000000000
    }
    if (quantity < 1) {
        return message.channel.send(`❌ ${message.author} ➤ Você precisa dizer uma quantia maior que esta!`)
    }
    if (isNaN(quantity)) {
        return message.channel.send(`❌ ${message.author} ➤ É necessário um __número__ válido.`)
    }
    if (userMoney < quantity) {
        return message.channel.send(`❌ ${message.author} ➤ Você não tem essa quantia para pagar.`)
    } else{
        db.add(`${user.id}.dinheiro`, Math.round(quantity))
        message.channel.send(`💰 ${message.author} ➤ Você enviou \`${Math.round(quantity)} (${abN(quantity)})\` Reals para o(a) ${user.username}!`)
        db.subtract(`${message.author.id}.dinheiro`, Math.round(quantity))
    }
    
   
}
module.exports.help = {
    aliases: ['enviar', 'doar'],
    name: 'pay',
    description: 'Paga algum membro',
    usage: '+pay @user <Quantia>'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}