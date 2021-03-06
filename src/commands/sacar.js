function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
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
const { RichEmbed } = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, utils) => {
    const user = message.author
    const userMoney = db.get(`${user.id}.dinheiro`)
    const userCartao = db.get(`${user.id}.cartao`)
    let quantity = args[0]
    if (quantity == "tudo") {
        if (userCartao < 1) return message.channel.send(`❌ ➤ ${message.author} Você não possui nada para sacar!`)
        quantity = userCartao
    } 
    if (quantity == "metade") {
        if (userCartao < 2) return message.channel.send(`❌ ➤ ${message.author} Você não possui um valor válido para sacar metade!`)
        quantity = Math.round(userCartao/2)
    } 
    if (isNaN(quantity)) return message.channel.send(`❌ ➤ ${message.author} Você precisa inserir uma quantia que você deseja sacar!`)
    if (quantity < 1) return message.channel.send(`❌ ➤ ${message.author} Quantia de saque inválida!`)
    if (quantity > userCartao) return message.channel.send(`❌ ➤ ${message.author} Você não tem tudo isso depositado para sacar!`)
    quantity = Math.round(quantity)
    
    db.add(`${user.id}.dinheiro`, quantity)
    db.subtract(`${user.id}.cartao`, quantity)
    message.channel.send(`💳 ➤ ${message.author} **Saque efetuado!**\nVocê sacou \`${quantity.toLocaleString("pt-BR")} Reals\`!`)
}
module.exports.help = {
    aliases: ['saque'],
    name: 'sacar',
    description: 'Mostra o dinheiro de um membro.',
    usage: '+money @membro'
}
// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}