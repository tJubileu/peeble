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
    const user = message.mentions.users.first() || client.users.get(args[0]) || message.author
    const userMoney = db.get(`${user.id}.dinheiro`)
    const userCartao = db.get(`${user.id}.cartao`)
    const embed = new RichEmbed()
        .setTitle(`Dinheiro do(a) ${user.tag}`)
        if (userMoney == null || userMoney == undefined) {
            embed.addField(`💶 Carteira`, `\`0 Reals\``)
        } else {
            embed.addField(`💶 Carteira`, `\`${userMoney.toLocaleString("pt-BR")} Reals\``)
        }
        if (userCartao == null || userCartao == undefined) {
            embed.addField(`💳 Cartão`, `\`0 Reals\``)
        } else {
            embed.addField(`💳 Cartão`, `\`${userCartao.toLocaleString("pt-BR")} Reals\``)
        }
        embed.setColor("GREEN")
        embed.setTimestamp()
    message.channel.send(embed)
}
module.exports.help = {
    aliases: ['dinheiro', 'reals', 'real', 'cash', 'bal'],
    name: 'money',
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