function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui", 'Six'];

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
    if (message.guild.id == "628326759754104855") {

    const user = message.mentions.users.first() || client.users.get(args[0]) || message.author
    const userMoney = db.get(`${user.id}.essencia`)
    if (userMoney == null) db.set(`${user.id}.essencia`, 0)
    const money = userMoney
    if (user.id === message.author.id) {
        if (!userMoney == null && !userMoney == undefined) {
            message.channel.send(`🟢  ${message.author} Você tem: **${userMoney.toLocaleString('pt-BR')} Essências**!`)
        } else {
            db.set(`${user.id}.essencia`, 0)
            message.channel.send(`🟢  ${message.author} Você tem: **0 Essências**!`)
        }

    } else {
        if (userMoney !== null) {
            message.channel.send(`🟢  ${message.author} \`${user.username}\` tem: **${money.toLocaleString('pt-BR')} Essências**!`)
        } else {
            db.set(`${user.id}.essencia`, 0)
            message.channel.send(`🟢  ${message.author} \`${user.username}\` tem: **0 Essências**!`)
        }
    }
}
   
}
module.exports.help = {
    aliases: ['wallet'],
    name: 'carteira',
    description: 'Mostra as essências de um membro.',
    usage: '+carteira @membro'
}
// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}