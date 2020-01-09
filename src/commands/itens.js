const db = require("quick.db")
const ms = require("parse-ms")
function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
var SI_SYMBOL = ["", "K", "Mi", "Bi", "T", "Quad", "Qui"];

function abn(number){

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
module.exports.run = async (client, message, args) => {
    let prefix = db.get(`${message.guild.id}.prefix`)
    const user = message.mentions.users.first() || client.users.get(args[0]) || message.author 
    const useritens = db.get(`${user.id}.itens`)
    if (user.id !== message.author.id) {
        if (db.get(`${user.id}.itens`) == null) db.set(`${user.id}.itens`, [])
        if (useritens.length < 1) return message.channel.send(`${message.author} ➤ \`${user.username}\` Não possui nenhum item!`)
        message.channel.send(`Itens do(a) \`${user.username}\`:\`\`\`\n-${useritens.join('\n-')}\n\`\`\``)
    } else {
        if (db.get(`${user.id}.itens`) == null) db.set(`${user.id}.itens`, [])
        if (useritens.length < 1) return message.channel.send(`${message.author} ➤ Você não possui nenhum item!\nDica: use \`${prefix}loja\` para comprar coisas.`)
        message.channel.send(`Seus itens:\`\`\`\n-${useritens.join('\n-')}\n\`\`\``)
    }
}
module.exports.help = {
    aliases: ['items'],
    name: 'itens',
    description: 'Seus itens.',
    usage: '+itens'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Econômia', /* You can make a category help command with this. */
    exclusiveTo: ''
}